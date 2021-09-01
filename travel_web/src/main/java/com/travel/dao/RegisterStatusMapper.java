package com.travel.dao;

import com.travel.entity.RegisterStatus;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface RegisterStatusMapper {
    List<RegisterStatus> _registerStatus_searchContext();
}
