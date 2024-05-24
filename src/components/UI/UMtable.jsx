/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Table } from "antd";



const UMTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <>
    <Table
      style={
        {
        //   overflowX: "auto",

        }
      }
      // className="custom-header" 
      loading={loading}
      scroll={{ x: 1000 }}
      columns={columns}
      bordered
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
   
    </>
  );
};

export default UMTable;
