package com.travel.programApp

import org.apache.spark.sql.{DataFrame, SaveMode}

object SparkSQLHBaseSink {

  def saveToHBase(dataFrame: DataFrame,tableName:String,rowkey:String,fields:String):Unit={
    dataFrame.write.format("com.travel.programApp.hbaseSink.HBaseSink")
      .mode(SaveMode.Overwrite)
      .option("hbase.table.name",tableName)
      .option("hbase.rowkey",rowkey)
      .option("hbase.fields",fields)
      .save()
  }
}

