package com.travel.dao;

import com.travel.entity.Final_summary_pat_order;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Final_summary_pat_order_mapper {
    List<Final_summary_pat_order> _final_summary_pat_order_searchContext();
}
