package com.travel.dao;

import com.travel.entity.Day_week_month_mileage;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Day_week_month_mileage_mapper {
    List<Day_week_month_mileage> _day_week_month_mileage_searchContext();
}
