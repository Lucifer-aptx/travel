package com.travel.programApp

import com.travel.common.{ConfigUtil, Constants}
import com.travel.utils.{HbaseTools, JsonParse}
import org.apache.hadoop.hbase.client.Connection
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.sql.SparkSession
import org.apache.spark.streaming.dstream.InputDStream
import org.apache.spark.streaming.kafka010.{HasOffsetRanges, OffsetRange}
import org.apache.spark.streaming.{Seconds, StreamingContext}

object StreamingMaxwellKafka {
  def main(args: Array[String]): Unit = {
    val brokers = ConfigUtil.getConfig(Constants.KAFKA_BOOTSTRAP_SERVERS)
    val topics = Array(Constants.VECHE)
    val conf = new SparkConf().setMaster("local[4]").setAppName("sparkMaxwell")
    val group_id:String = "vech_group"
    val kafkaParams = Map[String, Object](
      "bootstrap.servers" -> brokers,
      "key.deserializer" -> classOf[StringDeserializer],
      "value.deserializer" -> classOf[StringDeserializer],
      "group.id" -> group_id,
      "auto.offset.reset" -> "earliest",// earliest,latest,和none
      "enable.auto.commit" -> (false: java.lang.Boolean)
    )
    val sparkSession: SparkSession = SparkSession.builder().config(conf).getOrCreate()
    val context: SparkContext = sparkSession.sparkContext
    context.setLogLevel("WARN")
    //获取streamingContext
    val ssc: StreamingContext =  new StreamingContext(context,Seconds(1))
    //从kafka里面获取数据
    val getDataFromKafka: InputDStream[ConsumerRecord[String, String]] = HbaseTools.getStreamingContextFromHBase(ssc,kafkaParams,topics,group_id,"veche")

    getDataFromKafka.foreachRDD(eachRdd =>{
      if(!eachRdd.isEmpty()){
        //循环遍历每一个partition
        eachRdd.foreachPartition(eachPartition =>{
          val conn: Connection = HbaseTools.getHbaseConn
          eachPartition.foreach(eachLine =>{
            //获取到了我们一行的数 json格式的数据
            val str: String = eachLine.value()
            //解析json字符串
            val tuple: (String, Any) = JsonParse.parse(str)
            //将数据保存到habse里面去
            HbaseTools.saveBusinessDatas(tuple._1,tuple,conn)
          })
          conn.close()
        })
      }

      //更新offset的值
      val ranges: Array[OffsetRange] = eachRdd.asInstanceOf[HasOffsetRanges].offsetRanges
      for(eachRange <- ranges){
        val starOffset: Long = eachRange.fromOffset
        val endOffset: Long = eachRange.untilOffset
        val topic: String = eachRange.topic
        val partition: Int = eachRange.partition
        //将offset的值保存到hbase里面去
        HbaseTools.saveBatchOffset(group_id,topic,partition+"",endOffset)
      }
    })
    ssc.start()
    ssc.awaitTermination()

  }

}
