package com.travel.hbase;

import com.travel.common.Constants;
import com.travel.utils.HbaseTools;
import org.apache.commons.lang3.StringUtils;
import org.apache.hadoop.hbase.HColumnDescriptor;
import org.apache.hadoop.hbase.HTableDescriptor;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.Admin;
import org.apache.hadoop.hbase.client.Connection;
import org.apache.hadoop.hbase.util.Bytes;

import java.io.IOException;

public class CreateHBaseTableInit {
    public static void main(String[] args) throws IOException {
        Connection hbaseConn = HbaseTools.getHbaseConn();
        String[] tableNames = {"order_info", "renter_info", "driver_info", "opt_alliance_business"};

        Admin admin = hbaseConn.getAdmin();
        for (String tableName : tableNames) {

            HTableDescriptor hTableDescriptor = new HTableDescriptor(TableName.valueOf(tableName));
            HColumnDescriptor hColumnDescriptor = new HColumnDescriptor(Constants.DEFAULT_DB_FAMILY);
            hTableDescriptor.addFamily(hColumnDescriptor);

            //创建二进制的字节数组，用于分区
           byte[][] byteNum =  new byte[8][];
           //0001|
            for(int  i =0;i<8;i++){
                String leftPad = StringUtils.leftPad(i + "", 4, "0");
                //0001  0002  0003  0004
                byteNum[i] = Bytes.toBytes(leftPad + "|");
            }

            admin.createTable(hTableDescriptor,byteNum);


        }

        admin.close();
        hbaseConn.close();


    }


}
