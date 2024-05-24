import { Table } from "antd";
import { useAllUsersQuery } from "../../Redux/features/userApi";
import {
  Image,
  Button,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import UMTable from "../UI/UMtable";
import React from "react";
import { Link } from "react-router-dom";

const DashboardPackageUsers = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);
  const [gender, setGender] = useState("all");
  const { data: allUsersData, isLoading } = useAllUsersQuery({
    page: page,
    limit: size,
    role: "user",
    gender: gender
  });
  const userData = allUsersData?.data?.attributes.userList;
  const pagination = allUsersData?.data?.attributes.pagination;
  const [slStart, setSlStart] = useState(0);

  useEffect(() => {
    setSlStart((page - 1) * size + 1);
  }, [page]);

  const handleFilterChange = (values) => {
    console.log("🚀 ~ handleFilterChange ~ values:", values);
  };
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

  const columns = [
    {
      title: "#Sl",
      dataIndex: "sl",
      width: 100,
      render: (_, record, index) => slStart + index, // Render sl as a dynamic value starting from slStart
    },
    {
      title: "Name",
      render: (data) => (
        <div className="flex justify-start items-center gap-3 -my-3">
          <Image
            src={import.meta.env.VITE_IMAGE_BASE_URL + data.image || AllImage.noImage}
            style={{ height: "30px", width: "30px" }}
            alt="dd"
            className="rounded-full"
          />
          <Link to={`/users/user-details/${data._id}`}>{data.fullName}</Link>
        </div>
      ),
      ellipsis: true,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      // ellipsis: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (gender) => {
        if (gender) {
          return gender.charAt(0).toUpperCase() + gender.slice(1); // Capitalize the first letter
        } else {
          return "";
        }
      },
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      filteredValue: filteredInfo.gender || null,
      onFilter: (value, record) => {
        setGender(value); // Set the gender state when filtering
        return record.gender.includes(value);
      },
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
      }) => (
        <div style={{ padding: 8 }}>
          <Select
            style={{ width: "100%", marginBottom: 8, display: "block" }}
            value={selectedKeys[0]}
            onChange={(value) => {
              setSelectedKeys(value ? [value] : []);
              setGender(value); // Set the gender state when selection changes
            }}
            placeholder="Select a gender"
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          <div className="flex justify-center items-center">
            <Button
              type="primary"
              onClick={() => {
                confirm();
              }}
              size="small"
              style={{ width: "50%", marginRight: 8 }}
            >
              OK
            </Button>
            <Button onClick={()=>setGender("all")} size="small" style={{ width: "50%" }}>
              Reset
            </Button>
          </div>
        </div>
      ),
      width: 120,
    },    
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleString(),
    },
    {
      title: "Package",
      dataIndex: ["subscription", "name"]
    },
  ];

  return (
    <div className="mt-4 mr-4">
      <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[2px] pb-[12px] pe-6">
        {/* <p className="text-[18px] font-medium ps-6">Income Ratio</p> */}
        <div className="flex flex-row items-center justify-between ps-6 mt-[4px] mb-[8px]">
          <h1 className="text-[28px] font-medium">Recent Users</h1>
        </div>

        <UMTable
          loading={isLoading}
          columns={columns}
          dataSource={userData}
          pageSize={size}
          totalPages={pagination?.totalResults}
          totalResults={pagination?.totalResults}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default DashboardPackageUsers;
