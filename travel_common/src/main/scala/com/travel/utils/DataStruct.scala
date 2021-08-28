package com.travel.utils

import java.util
import java.util.Properties

import com.alibaba.fastjson.JSONObject


object DataStruct {

  /**
    * 转JSON
    * @param tuples
    * @return
    */
  def convertJson(tuples:(String , Any)*):JSONObject ={
    tuples.foldLeft(new JSONObject()){
      case (obj , (k,v)) => obj.put(k , v)
        obj
    }
  }

  /**
    * 转map
    * @param tuples
    * @return
    */
  def convertMap(tuples:(String , String)*): java.util.HashMap[String , String] ={
    tuples.foldLeft(new util.HashMap[String , String]()){
      case (map , (k,v)) => map.put(k,v)
        map
    }
  }

  /**
    * 转properties
    * @param tuples
    * @return
    */
  def convertProp(tuples:(String , String)*):Properties = {
    tuples.foldLeft(new Properties()){
      case (prop , (k,v)) => prop.setProperty(k,v)
        prop
    }
  }
}
