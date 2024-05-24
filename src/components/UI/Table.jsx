/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Table as AntTable, ConfigProvider } from "antd";
// import { paginationThemes2 } from "../../../themes/Index";

// Table component
export default function Table({
  page,
  total,
  loading,
  onTableChange,
  columns,
  data,
  needPagination,
  Children
}) {
  return (
    <div>
      <div>{Children}</div>
      <ConfigProvider>
        <AntTable
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={
            needPagination && {
              current: page, // Set the current page
              pageSize: total, // Set the total number of items per page
              total: total, // Set the total number of items
              onChange: onTableChange, // Function to handle page change
            }
          }
          onChange={onTableChange}
        />
      </ConfigProvider>
    </div>
  );
}
