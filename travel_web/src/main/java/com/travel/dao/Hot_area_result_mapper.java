package com.travel.dao;


import com.travel.entity.Hot_area_result;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Hot_area_result_mapper {
    List<Hot_area_result> hot_area_result_searchContext();
}
