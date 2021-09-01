package com.travel.dao;


import com.travel.entity.Driver_order_summary;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Driver_order_summary_mapper {
    List<Driver_order_summary> _driver_order_summary_searchContext();
}
