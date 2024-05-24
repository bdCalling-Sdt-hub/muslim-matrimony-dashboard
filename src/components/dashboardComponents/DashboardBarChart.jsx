import { Space, DatePicker } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Rectangle,
} from "recharts";
import { useEarningChartQuery } from "../../Redux/features/earningApi";
import { useState } from "react";

const DashboardBarChart = () => {
  const [year, setYear] = useState(new Date().getFullYear()); // Default year [2021]

  const {data: earnings, isLoading} = useEarningChartQuery(year);
  const earningChart = earnings?.data?.attributes;
  console.log("earnings", earnings);

  const handleMonthPickerChange = (date, dateString) => {
    console.log(date, dateString);
    setYear(dateString);
    // You can handle the selected month and year here
  };

  return (
    <div className="mt-4 mr-4">
      <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
        <div className="flex flex-row items-center justify-between ps-6 mt-[4px] mb-[12px]">
          <h1 className="text-[32px] font-medium">Earnings</h1>
          <Space>
          <DatePicker onChange={handleMonthPickerChange} picker="year" />
          </Space>
        </div>
        <BarChart
          width={1500}
          height={250}
          data={earningChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="amount"
            fill="#E33183"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default DashboardBarChart;
