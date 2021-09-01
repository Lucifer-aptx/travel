package com.travel.dao;


import com.travel.entity.Register_driver;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface Register_driver_mapper {
    List<Register_driver> _register_driver_searchContext();
}
