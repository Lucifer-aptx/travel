package com.travel.dao;

import com.travel.entity.PayAll_register_order_count;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PayAll_register_order_count_mapper {
    List<PayAll_register_order_count> _payAll_register_order_count_searchContext();
}
