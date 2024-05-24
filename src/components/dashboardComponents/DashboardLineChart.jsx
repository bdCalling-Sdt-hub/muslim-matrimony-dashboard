import { Dropdown, Space } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  //   ResponsiveContainer,
} from "recharts";
import { DownOutlined } from '@ant-design/icons';

const data = [
  {
    day: "Jan",
    monthly: 3000,
    weekly: 2000,
  },
  {
    day: "Feb",
    monthly: 2000,
    weekly: 2500,
  },
  {
    day: "Mar",
    monthly: 2780,
    weekly: 2080,
  },
  {
    day: "Apr",
    monthly: 1890,
    weekly: 1990,
  },
  {
    day: "May",
    monthly: 2390,
    weekly: 2590,
  },
  {
    day: "Jun",
    monthly: 3490,
    weekly: 3590,
  },
  {
    day: "Jul ",
    monthly: 3000,
    weekly: 2000,
  },
  {
    day: "Aug ",
    monthly: 2000,
    weekly: 3000,
  },
  {
    day: "Sept ",
    monthly: 3500,
    weekly: 4000,
  },
  {
    day: "Oct ",
    monthly: 2500,
    weekly: 1500,
  },
  {
    day: "Nov ",
    monthly: 3000,
    weekly: 3800,
  },
  {
    day: "Dec ",
    monthly: 4000,
    weekly: 3500,
  },
];

const items = [
  {
    label: <a href="#">January, 2024</a>,
    key: '0',
  },
  {
    label: <a href="#">February, 2024</a>,
    key: '1',
  },
  {
    label: 'March, 2024',
    key: '2',
  },
];

const DashboardLineChart = () => {
  return (
    <div className="bg-white rounded-lg px-[20px] pt-[16px] pb-[12px] pe-6 ">
      <div className="flex justify-between items-center ps-6 mt-[8px] mb-[18px]">
        <p className="text-xl font-bold">Total  Income</p>
        <div className="flex gap-x-4 ps-6 items-center">
          <div className="w-[14px] h-[14px] bg-[#D0A65A] rounded-lg"></div>
          <h1 className="text-[18px] font-medium text-black500">
            Monthly
          </h1>
        </div>
        <div className="flex gap-x-4 ps-6 items-center">
          <div className="w-[14px] h-[14px] bg-black500 rounded-lg"></div>
          <h1 className="text-[18px] font-medium text-black500">
            Weekly
          </h1>
        </div>
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              This Month
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={1000}
        height={280}
        data={data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 " vertical={false} stroke="#54A0EC" />
        <XAxis dataKey="day" stroke="black" />
        <YAxis dataKey="monthly" stroke="black" />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="monthly"
          stroke="#D0A65A"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="weekly"
          stroke="black"
          activeDot={{ r: 8 }}
        />

      </LineChart>
      {/* </ResponsiveContainer> */}
      
    </div>
  );
};

export default DashboardLineChart;
