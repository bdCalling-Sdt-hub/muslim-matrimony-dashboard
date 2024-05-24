import { Table, Tabs } from "antd";
import { SwapOutlined } from "@ant-design/icons";

const DashboardAllUsers = () => {
  const columns = [
    {
      title: "#SL",
      dataIndex: "sl",
    },
    {
      title: "User Name",
      dataIndex: "userName",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Payment",
      dataIndex: "payment",
    },
  ];
  const data = [
    {
      key: "1",
      sl: "01",
      userName: "Benjamin Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Weekly",
    },
    {
      key: "2",
      sl: "02",
      userName: "Benjamin Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "3",
      sl: "03",
      userName: "Benjamin Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Weekly",
    },
    {
      key: "4",
      sl: "04",
      userName: "Benjamin Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "5",
      sl: "05",
      userName: "Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "6",
      sl: "06",
      userName: "Benjamin Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "7",
      sl: "07",
      userName: "Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "8",
      sl: "08",
      userName: "Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "9",
      sl: "09",
      userName: "Benjamin Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
    {
      key: "10",
      sl: "10",
      userName: "Price",
      date: "Mar 5,2025",
      payment: "$ 12,000",
      packages: "Monthly",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const tabIcons = [SwapOutlined, SwapOutlined, SwapOutlined];
  const tabLabels = [" Shopping", " Business", " Organization"];


  return (
    <div className="mr-4">
      <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
        {/* <p className="text-[18px] font-medium ps-6">Income Ratio</p > */}
        < div className="flex flex-row items-center justify-between ps-6 mt-[8px] mb-[18px]">
          <Tabs defaultActiveKey="2">
            {tabIcons.map((Icon, index) => {
              const id = String(index + 1);
              return (
                <Tabs.TabPane
                  key={id}
                  tab={
                    <span>
                      <Icon />
                      {tabLabels[index]}
                    </span>
                  }
                >
                  {`Content of tab ${tabLabels[index]}`}
                  {/* <Table columns={columns} dataSource={data} onChange={onChange} / > */}
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </div>

        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div >
  );

};

export default DashboardAllUsers;