package com.travel.dao;

import com.travel.entity.StayRate;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StayRate_mapper {
    List<StayRate> _stayRate_searchContext();
}
