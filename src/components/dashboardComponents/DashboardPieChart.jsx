import { Dropdown, Space } from "antd";
import { PieChart, Pie, Cell } from "recharts";
import { DownOutlined } from '@ant-design/icons';

const DashboardPieChart = () => {
  const data = [
    { name: "Monthly ", value: 300, color: "#D0A65A" },
    { name: "Weekly", value: 500, color: "#1D1D1F" },
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

  return (
    <div className="bg-white rounded-lg px-[20px] pt-[16px]  pb-[12px] pe-6">

      <div className="flex justify-between items-center ps-6 mt-[8px] mb-[18px]">
        <p className="text-xl font-bold">Total  Income</p>
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

      <div className="flex justify-center">
        <PieChart width={228} height={232}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            //   outerRadius={10}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-row gap-y-2 mt-10">
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[14px] h-[14px] bg-[#D0A65A] rounded-lg"></div>
          <h1 className="text-[18px] text-black500 font-medium">
            Monthly  (40%)
          </h1>
        </div>
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[14px] h-[14px] bg-black500 rounded-lg"></div>
          <h1 className="text-[18px] text-black500 font-medium">
            Weekly (50%)
          </h1>
        </div>

      </div>
    </div>
  );
};

export default DashboardPieChart;
