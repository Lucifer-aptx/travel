package com.travel.dao;

import com.travel.entity.Summary_register_active_df;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Summary_register_active_mapper {
    List<Summary_register_active_df> _summary_register_active_searchContext();
}
