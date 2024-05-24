/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Button, Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/categoryimage.png";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils/storageService";
import { RiUpload2Line } from "react-icons/ri";
import { useUpdateProfileMutation } from "../../Redux/features/authApi";
import Swal from "sweetalert2";
// import baseAxios from "../../../../Config";

const Profile = () => {
  const userFromLocalStorage = getLocalStorageItem("user");
  const [profileEdit, setProfileEdit] = useState(false);
  const [fullName, setFullName] = useState(userFromLocalStorage?.fullName);
  const [email, setEmail] = useState(userFromLocalStorage?.email);
  const [phoneNumber, setPhoneNumber] = useState(
    userFromLocalStorage?.phoneNumber
  );

  const handleChange = () => {
    setProfileEdit(true);
  };

  const [updateProfile] = useUpdateProfileMutation();

  const handleSubmit = async () => {
    const formData = new FormData();

    // Append individual fields to the FormData object
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);

    // Append the image file if you have it (assuming 'image' is a File object)
    if (image) {
      formData.append("image", image);
    }
    try{
      const res = await updateProfile(formData).unwrap();
      if(res && res.statusCode === "200"){
        Swal.fire({
          icon: 'success',
          title: "Profile updated successfully",
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          setLocalStorageItem("user", res.data.attributes);
          setProfileEdit(false);
        })
      }
    }
    catch(err){
      console.log("err", err)
      Swal.fire({
        icon: 'error',
        title: err.data.message,
        showConfirmButton: true,
        timer: 1500
      })
    }

  };

  const [image, setImage] = useState(null);

  const handleImageUpload = (info) => {
    setImage(info.fileList[info?.fileList?.length - 1].originFileObj);
    info.fileList = [];
  };
  const handleRemoveImage = (info) => {
    setImage(null);
  };

  return (
    <div className="mt-[24px] border-secondary border-[1px] rounded-2xl h-[780px] bg-[#fceaf3]">
      <div className="p-[30px]">
        {!profileEdit ? (
          <>
            <div className="border-b-[1.5px] border-siteColor py-3 mb-5">
              <h1 className="text-3xl font-semibold">Profile</h1>
            </div>
            <div className="flex justify-center items-center mb-5">
              <div className="flex items-center gap-5">
                <Image
                  width={150}
                  height={150}
                  style={{ borderRadius: "6px" }}
                  src={import.meta.env.VITE_IMAGE_BASE_URL + userFromLocalStorage.image || logo}
                // src={userFromLocalStorage.image?.publicFileUrl}
                />
                <div style={{ width: "400px" }}>
                  <h2>{fullName}</h2>
                </div>
              </div>
              {/* <div>
                                <button
                                    onClick={handleChange}
                                    className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg"
                                >
                                    <LiaEditSolid fontSize={16} />
                                    Edit
                                </button>
                            </div> */}
            </div>

            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <div className="bg-white flex items-center gap-4 py-2 px-4 rounded-lg">
                  <FaRegUser color="#0071E3" />
                  <p style={{ fontSize: "18px" }}>{fullName}</p>
                </div>
                {/* <label htmlFor="">Name</label>
                                <Input
                                    style={{ height: "45px" }}
                                    // defaultValue={userFromLocalStorage?.fullName}
                                    defaultValue="Ann Marie"
                                    readOnly
                                /> */}
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                {/* <label htmlFor="">Email</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.email}
                                    readOnly
                                /> */}
                <div className="bg-white flex items-center gap-4 py-2 px-4 rounded-lg">
                  <MdOutlineEmail color="#0071E3" />
                  <p style={{ fontSize: "18px" }}>{email}</p>
                </div>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "15px" }}>
              <Col span={24}>
                {/* <label htmlFor="">Phone Number</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.phoneNumber}
                                /> */}
                <div className="bg-white flex items-center gap-4 py-2 px-4 rounded-lg">
                  <FaPhoneAlt color="#0071E3" />
                  <p style={{ fontSize: "18px" }}>{phoneNumber}</p>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                marginBottom: "15px",
              }}
            >
              <Col span={24}>
                <div>
                  <button
                    onClick={handleChange}
                    className="flex items-center w-full justify-center gap-2 bg-siteColor font-bold text-white px-5 py-2 rounded-lg absolute top-20"
                  >
                    {/* <LiaEditSolid fontSize={16} /> */}
                    Update Profile
                  </button>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <div
              onClick={() => setProfileEdit(false)}
              className="flex items-center mb-5 cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-black "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="text-3xl  font-semibold ">Edit Profile</div>
            </div>

            <div className="border-b-[1.5px] border-siteColor py-3 mb-5 ">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={() => false} // Prevent default upload behavior
                onChange={handleImageUpload}
              >
                {image ? (
                  <div className="flex-col">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="avatar"
                      width={70}
                      height={70}
                      className="ml-1.5"
                    />
                    <Button
                      className="bg-red-600 text-white font-semibold"
                      onClick={handleRemoveImage} // Clear the image when the button is clicked
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center  justify-center">
                    <RiUpload2Line style={{ fontSize: "24px" }} />
                  </div>
                )}
              </Upload>
            </div>

            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Name</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Col>
            </Row>
            <Row gutter={15} style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Phone Number</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Col>
            </Row>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-siteColor font-bold text-lg text-white px-5 py-2 rounded-lg w-full"
              block
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
