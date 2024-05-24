/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
// import baseAxios from "../../../../Config";
import Swal from "sweetalert2";
import { Input, message } from "antd";
import { clearLocalStorageItems, getLocalStorageItem } from "../../../utils/storageService";
import { useChangePasswordMutation, useForgetPasswordMutation } from "../../../Redux/features/authApi";

const ChangePasswordPage = () => {
  const { email } = getLocalStorageItem("user");
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const [changePassword] = useChangePasswordMutation();
  const handleForgetPassword = async () => {
    if (isLoading) {
      message.loading("Please wait...", 1);
      return;
    };
    try {
      const res = await forgetPassword({ email }).unwrap();
      if (res && res.statusCode === "200") {
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          clearLocalStorageItems();
          navigate("/signin");
        })
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: error.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  const handleChangePassword = async () => {
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      message.error("Please fill all the fields");
    }
    else if (newPassword !== confirmPassword) {
      message.error("Password and Confirm Password does not match");
    }
    else if(newPassword === oldPassword){
      message.error("New password and old password should not be same");
    }
    else {
      try {
        const res = await changePassword({
          oldPassword,
          newPassword
        }).unwrap();
        console.log("res---------", res.statusCode);
        if (res && res.statusCode === "200") {
          Swal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate("/");
          })
        }
      }
      catch (err) {
        console.log("err", err);
        if (err.status === 401) {
          Swal.fire({
            icon: 'error',
            title: err.data.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            clearLocalStorageItems();
            navigate("/signin");
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    }
  };

  return (
    <div className="p-5 ">
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold">Current Password</p>
        {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your current password"
          onChange={(e) => setOldPassword(e.target.value)}
        /> */}
        <Input.Password
          placeholder="Enter your current password"
          onChange={(e) => setOldPassword(e.target.value)}
          className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold">New Password</p>
        {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
        /> */}
        <Input.Password
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
          className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold">Confirm New Password</p>
        {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Confirm your new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}

        <Input.Password
          placeholder="Confirm your new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <div
        onClick={handleForgetPassword}
        className="text-lg cursor-pointer text-siteColor font-semibold"
      >
        Forgot Password?
      </div>
      <button
        onClick={handleChangePassword}
        className="mt-5 bg-siteColor hover:bg-[#e45775] w-[750px] text-white font-bold py-3 px-4 rounded-md"
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePasswordPage;
