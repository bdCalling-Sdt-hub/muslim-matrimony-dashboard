import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";
import { useCreateUserMutation } from "../../../Redux/features/userApi";
import Swal from "sweetalert2";

const { Option } = Select;

export default function CreateUser() {
  const [form] = Form.useForm();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [image, setImage] = useState(null);

  const handleImageUpload = (info) => {
    setImage(info.fileList[info?.fileList?.length - 1].originFileObj);
    info.fileList = [];
  };
  const handleRemoveImage = (info) => {
    setImage(null);
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    console.log("Success:", values);
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("gender", values.gender);
    formData.append("role", "user");
    if (image) {
      formData.append("image", image)
    }
    try {
      const res = await createUser(formData).unwrap();
      console.log("res", res);
      if (res && res.statusCode === "201") {
        Swal.fire({
          icon: 'success',
          title: "User created successfully",
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          form.resetFields();
          setImage(null);
        })
      }
    }
    catch (err) {
      console.log("err", err)
      Swal.fire({
        icon: 'error',
        title: err.data.message,
        showConfirmButton: true,
        timer: 1500
      })
    }
  };

  return (
    <div className="">
      <Typography.Title level={2}>Add New User</Typography.Title>
      <Form
        layout="vertical"
        isLoading={isLoading}
        onFinish={onFinish}
        form={form}
        style={{ backgroundColor: "#fceaf3" }}
        className="p-5 rounded-lg"
      // initialValues={{ status: ENUM_STATUS.ACTIVE }}
      >
        <div className="flex items-center justify-center">
          <Form.Item label="Your Photo" name="profile">
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
          </Form.Item>
        </div>
        <Row>
          <Col style={{ width: "100%" }}>
            <Row gutter={[0, 0]}>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Full-name is required" },
                  ]}
                >
                  <Input size="large" placeholder="Type address" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Email is required" }]}
                >
                  <Input size="large" placeholder="Type address" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Contact Number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Contact number is required",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Type Email" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Gender is required" },
                  ]}
                >
                  <Select size="large" placeholder="Select gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="flex justify-center items-center">
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              backgroundColor: "#E33183",
              color: "white",
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
