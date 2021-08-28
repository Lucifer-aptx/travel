package com.travel.dao;

import com.travel.entity.Active;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface Active_mapper {
    List<Active> _active_searchContext();
}
