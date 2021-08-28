package com.travel.programApp

import com.travel.common.{ConfigUtil, Constants, JedisUtil}
import com.travel.utils.HbaseTools
import org.apache.hadoop.hbase.client.Connection
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.sql.SparkSession
import org.apache.spark.streaming.dstream.InputDStream
import org.apache.spark.streaming.kafka010.{HasOffsetRanges, OffsetRange}
import org.apache.spark.streaming.{Seconds, StreamingContext}
import org.apache.spark.{SparkConf, SparkContext}
import redis.clients.jedis.Jedis

/**
  * 获取kafka当中的数据，进行解析，将海口以及成都的数据全部都保存到hbase里面去
  * 并且将成都的经纬度信息，保存到redis里面去，供实时轨迹浏览查看的
  */
object StreamingKafka {

  def main(args: Array[String]): Unit = {

    val brokers = ConfigUtil.getConfig(Constants.KAFKA_BOOTSTRAP_SERVERS)
    val topics = Array(ConfigUtil.getConfig(Constants.CHENG_DU_GPS_TOPIC),ConfigUtil.getConfig(Constants.HAI_KOU_GPS_TOPIC))
    val group:String = "gps_consum_group"
    val kafkaParams = Map[String, Object](
      "bootstrap.servers" -> brokers,
      "key.deserializer" -> classOf[StringDeserializer],
      "value.deserializer" -> classOf[StringDeserializer],
      "group.id" -> group,
      "auto.offset.reset" -> "latest",// earliest,latest,和none
      "enable.auto.commit" -> (false: java.lang.Boolean)  //设置成为false，自己来维护offset的值
    )
    // 使用direct方式来进行消费， 最少一个线程
    // receiver方式 最少两个线程
    val sparkConf: SparkConf = new SparkConf().setMaster("local[1]").setAppName("streamingKafka")

    val sparkSession: SparkSession = SparkSession.builder().config(sparkConf).getOrCreate()

    val context: SparkContext = sparkSession.sparkContext
    context.setLogLevel("WARN")
    val streamingContext = new StreamingContext(context,Seconds(5))
    // 从kafka中获取到了海口和成都数据
    val resultDStream: InputDStream[ConsumerRecord[String, String]] = HbaseTools.getStreamingContextFromHBase(streamingContext,kafkaParams,topics,group,"(.*)gps_topic")
    //获取出来数据，保存到hbase，以及redis，并且更新offset值
    //将数据取出来之后，保存数据库，包括hbase数据库，以及redis数据库
    resultDStream.foreachRDD(eachRdd  =>{
      if(!eachRdd.isEmpty()){
        eachRdd.foreachPartition(eachPartition  =>{
          val conn: Connection = HbaseTools.getHbaseConn
          val jedis: Jedis = JedisUtil.getJedis
          //获取到每一行数据
          eachPartition.foreach(eachLine =>{
            HbaseTools.saveToHBaseAndRedis(conn,jedis,eachLine)
          })
          conn.close()
          jedis.close()
        })
        //一个分区的数据已经处理完成的
        //需要更新hbase当中保存的offset的值  ranges表示每一个分区的partition的起始值和结束值
        val ranges: Array[OffsetRange] = eachRdd.asInstanceOf[HasOffsetRanges].offsetRanges

        for(eachRange <- ranges){
          val starOffset: Long = eachRange.fromOffset

          val endOffset: Long = eachRange.untilOffset

          val topic: String = eachRange.topic

          val partition: Int = eachRange.partition

          //将offset的值保存到hbase里面去
          HbaseTools.saveBatchOffset(group,topic,partition+"",endOffset)
        }
      }
    })
    //数据存入到hbase以及redis已经实现了
    streamingContext.start()
    streamingContext.awaitTermination()
  }
}
