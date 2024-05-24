import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import TextArea from "antd/es/input/TextArea";
const userInfo = {
  aboutUs:
    "Habitasse inceptos libero in at nunc morbi suspendisse natoque letius iaculis vitae quisque efficitur aliquam vivamus maximus eget ultrices ornare parturient faucibus magnis dapibus nisi lorem eu vel nisl aliquet sodales interdum nostra fermentum lectus maecenas pharetra mauris mattis pretium ultricies himenaeos neque et hac leo ad dui nam hendrerit",
  address: "Noakhali,Bangladesh",
  city: "dhaka",
  contactNumber: "01876226685",
  country: "bangladesh",
  dateOfBirth: "2024-05-22",
  educationLevel: "s.s.c",
  email: "amar.chouat@gmail.com",
  fastName: "Sampod",
  gender: "male",
  lastName: "nath",
  maritalStatus: "Single",
  motherTongue: "bangla",
  occupation: "farmer",
  religion: "hinduism",
  state: "dhaka",
};

import { FaLessThan } from "react-icons/fa6";
export default function UserDetails() {
  const { id } = useParams();

  console.log("🚀 ~ UserDetails ~ id:", id);
  return (
    <>
      <div className="flex justify-start items-center gap-4">
        <Link to={"/users"}>
          <FaLessThan className="text-2xl mt-1" />
        </Link>
        <h1 className="text-3xl my-2 font-semibold">
          Users / <span className="text-[#FF65C0]">User details</span>
        </h1>
      </div>
      <div className="bg-white p-5 rounded-lg font-semibold space-y-5">
        <div className="flex justify-between items-center text-2xl">
          <h1>User details :</h1>
          <FiEdit />
        </div>
        <div className="text-lg space-y-4 text-gray-600">
          <div className="flex justify-between items-center">
            <h1>Full name : </h1>
            <h1>{userInfo.fastName + " " + userInfo.lastName}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Phone number : </h1>
            <h1>{userInfo.contactNumber}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Email : </h1>
            <h1>{userInfo.email}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Joining date : </h1>
            <h1>{userInfo.dateOfBirth}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Gender : </h1>
            <h1>{userInfo.gender}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Date of birth : </h1>
            <h1>{userInfo.dateOfBirth}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Age : </h1>
            <h1>{22}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Mother Tongue : </h1>
            <h1>{userInfo.motherTongue}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Religion : </h1>
            <h1>{userInfo.religion}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Education : </h1>
            <h1>{userInfo.educationLevel}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Occupation : </h1>
            <h1>{userInfo.occupation}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Packages : </h1>
            <h1>{"gole"}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Packages Duration : </h1>
            <h1>{"3 Month"}</h1>
          </div>
          <div className="space-y-3 font-bold">
            <h1 className="text-3xl">A little about </h1>
            <TextArea
              className="text-gray-600 font-semibold"
              value={userInfo.aboutUs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
