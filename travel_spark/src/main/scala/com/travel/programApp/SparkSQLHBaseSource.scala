package com.travel.programApp

import com.travel.transaction.{DriverTransation, HotAreaOrder, HotOrderTransation, OrderTransation, RenterTransation}
import com.travel.utils.GlobalConfigUtils
import org.apache.spark.sql.{DataFrame, SparkSession}

object SparkSQLHBaseSource {
  def main(args: Array[String]): Unit = {

    val sparkSession: SparkSession = SparkSession
      .builder()
      .master("local[1]")
      .appName("sparkSQLHBase")
      .config("spark.extraListeners","com.travel.listener.SparkSessionListener")
      .getOrCreate()
    sparkSession.sparkContext.setLogLevel("WARN")
    val order: DataFrame = sparkSession.read
      .format("com.travel.programApp.hbaseSource.HBaseSource")
      .options(Map(
        GlobalConfigUtils.getProp("sparksql_table_schema") -> GlobalConfigUtils.getProp("order.sparksql_table_schema"),
        GlobalConfigUtils.getProp("hbase_table_name") -> GlobalConfigUtils.getProp("syn.table.order_info"),
        GlobalConfigUtils.getProp("hbase_table_schema") -> GlobalConfigUtils.getProp("order.hbase_table_schema")
      )).load()

    val driver: DataFrame = sparkSession.read
      .format("com.travel.programApp.hbaseSource.HBaseSource")
      .options(Map(
        GlobalConfigUtils.getProp("sparksql_table_schema") -> GlobalConfigUtils.getProp("drivers.spark_sql_table_schema"),
        GlobalConfigUtils.getProp("hbase_table_name") -> GlobalConfigUtils.getProp("syn.table.driver_info"),
        GlobalConfigUtils.getProp("hbase_table_schema") -> GlobalConfigUtils.getProp("driver.hbase_table_schema")
      )).load()

    val renter: DataFrame = sparkSession.read
      .format("com.travel.programApp.hbaseSource.HBaseSource")
      .options(Map(
        GlobalConfigUtils.getProp("sparksql_table_schema") -> GlobalConfigUtils.getProp("registe.sparksql_table_schema"),
        GlobalConfigUtils.getProp("hbase_table_name") -> GlobalConfigUtils.getProp("syn.table.renter_info"),
        GlobalConfigUtils.getProp("hbase_table_schema") -> GlobalConfigUtils.getProp("registe.hbase_table_schema")
      )).load()

    //??????
    order.createOrReplaceTempView("order")
    driver.createOrReplaceTempView("driver")
    renter.createOrReplaceTempView("renter")
    //cache
    sparkSession.sqlContext.cacheTable("order")
    sparkSession.sqlContext.cacheTable("driver")
    sparkSession.sqlContext.cacheTable("renter")

    // ????????????????????????
     OrderTransation.init(sparkSession)

    // ????????????????????????
    RenterTransation.init(sparkSession)

    // ????????????????????????
    DriverTransation.init(sparkSession)

    // ?????????????????????
    HotOrderTransation.init(sparkSession)

    //???????????????????????????
     HotAreaOrder.init(sparkSession)
  }
}

