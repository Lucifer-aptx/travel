package com.travel.dao;


import com.travel.entity.Hot_order;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Hot_order_mapper {
    List<Hot_order> _hot_order_searchContext();
}
