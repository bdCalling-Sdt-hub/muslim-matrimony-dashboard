/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import { useState } from "react";
import {
  Image,
  Button,
  Select,
} from "antd";

import { Link } from "react-router-dom";
import { AllImage } from "../../../assets/AllImage.js";
import UMTable from "../../../components/UI/UMtable.jsx";
import { useAllUsersQuery, useUpdateUserMutation } from "../../../Redux/features/userApi.js";
import Swal from "sweetalert2";

const { Option } = Select;
const BlockedUsers = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [gender, setGender] = useState("all");
  const { data: allUsersData, isLoading } = useAllUsersQuery({
    page: page,
    limit: size,
    role: "user",
    gender: gender,
    isBlocked: true
  });
  const userData = allUsersData?.data?.attributes.userList;
  const pagination = allUsersData?.data?.attributes.pagination;

  const [filteredInfo, setFilteredInfo] = useState({});
  const [slStart, setSlStart] = useState(0);

  useEffect(() => {
    setSlStart((page - 1) * size + 1);
  }, [page]);

  const handleFilterChange = (values) => {
    console.log("🚀 ~ handleFilterChange ~ values:", values);
  };

  const [updateUser] = useUpdateUserMutation();

  const handleUnblock = async (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to un-block this person?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, un-block!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await updateUser({ _id: id, isBlocked: false }).unwrap();
          console.log(res)
          if (res && res.statusCode === '200') {
            Swal.fire({
              title: 'Blocked!',
              text: 'User has been un-blocked',
              icon: 'success'
            })
          }
        }
        catch (err) {
          console.log(err)
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error'
          })
        }

      } else {
        console.log("User cancelled blocking");
      }
    });
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
      dataIndex: ["subscription", "name"],
      render: (text, record) => record.subscription ? record.subscription.name : "Unknown"
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex justify-start items-center gap-2">
          <Button
            danger
            onClick={() => handleUnblock(record._id)}
          >
            UBlock
          </Button>
        </div>
      ),
    }
  ];

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

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Blocked Users list</h1>
      </div>

      {/* <div><TableHeader title={"Users"} icon={users} property1='Free Users ' property2='Total Users' data1='500' data2='1,234' /></div> */}
      <div className="mt-4 ">
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

export default BlockedUsers;
