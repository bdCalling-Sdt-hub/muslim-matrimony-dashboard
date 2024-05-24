/ eslint-disable no-unused-vars /
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
// import TableHeader from "./components/tableHeader.jsx";
// import dollar from "../../../assets/Credit_Card_01.png";
import CustomDrawerIncome from "../../../components/UI/CustomDrawerIncome.jsx";
import Income from "../../../assets/income.png";
import { Image } from "antd";
import { useAllEarningsQuery } from "../../../Redux/features/earningApi.js";
import { formatNumber } from "../../../utils/numberFormatter.js";
import UMTable from "../../../components/UI/UMtable.jsx";

const TodayIncome = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const {data:allEarnings, isLoading} = useAllEarningsQuery({
    page: page,
    limit: size
  });
  const earningsData = allEarnings?.data?.attributes.paymentList;
  const totalEarnings = allEarnings?.data?.attributes.totalAmount;
  const earningPagination = allEarnings?.data?.attributes.pagination;

  console.log("allEarnings", allEarnings, earningsData, earningPagination);

  
  const onPaginationChange = (page, pageSize) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination, filters, sorter) => {
    // setFilteredInfo(filters);
    handleFilterChange(filters);
    console.log("🚀 ~ onTableChange ~ filter:", filters);
    const { order, field } = sorter;
    //
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState();

  const [slStart, setSlStart] = useState(0);

  useEffect(() => {
    setSlStart((page - 1) * size + 1);
  }, [page, size]);

  console.log(open);

  const handleOnCline = (data) => {
    setDrawerData(data);
    setOpen((prev) => !prev);
  };
  const columns = [
    {
      title: "#Sl",
      dataIndex: "sl",
      width: 100,
      render: (_, record, index) => slStart + index, // Render sl as a dynamic value starting from slStart
    },
    {
      title: "Full Name",
      dataIndex: ["user","fullName"]
    },
    {
      title: "Phone",
      dataIndex: ["user","phoneNumber"],
    },
    {
      title: "Email",
      dataIndex: ["user","email"],
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleString(),
    },
    {
      title: "Package",
      dataIndex: ["subscription","name"],
      render: (text, record) => record.subscription ? record.subscription.name : "Unknown"
    },
    {
      title: <p className="">Action</p>,
      dataIndex: "sl",
      render: function (_, data) {
        return (
          <div className="text-siteColor">
            <FaEye onClick={() => handleOnCline(data)} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <CustomDrawerIncome
        open={open}
        setOpen={setOpen}
        data={drawerData}
      ></CustomDrawerIncome>
      <div className="flex items-center justify-between px-10 bg-white mb-3 rounded-md">
        <div>
          <h1 className="text-3xl font-bold">Total Earnings</h1>
          <p className="text-3xl font-bold text-siteColor ">${formatNumber(totalEarnings) || 0}</p>
        </div>
        <Image src={Income} className="h-20 w-fit" alt="income" />
      </div>
      <p className="text-2xl font-semibold mb-2">Transactions</p>
      <UMTable
          loading={isLoading}
          columns={columns}
          dataSource={earningsData}
          pageSize={size}
          totalPages={earningPagination?.totalResults}
          totalResults={earningPagination?.totalResults}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
    </div>
  );
};

export default TodayIncome;
