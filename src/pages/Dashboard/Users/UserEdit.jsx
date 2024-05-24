import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import { DatePicker, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
const userInfo = {
  aboutUs:
    "Habitasse inceptos libero in at nunc morbi suspendisse natoque letius iaculis vitae quisque efficitur aliquam vivamus maximus eget ultrices ornare parturient faucibus magnis dapibus nisi lorem eu vel nisl aliquet sodales interdum nostra fermentum lectus maecenas pharetra mauris mattis pretium ultricies himenaeos neque et hac leo ad dui nam hendrerit",
  address: "Noakhali,Bangladesh",
  city: "dhaka",
  contactNumber: "01876226685",
  country: "bangladesh",
  dateOfBirth: "2024-05-01T10:03:52+0000",
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
import { FiEdit } from "react-icons/fi";
export default function UserEdit() {
  const [disabled, setDisable] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const { dateOfBirth, ...userDetails } = userInfo;
  return (
    <div className="relative">
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ backgroundColor: "#fceaf3" }}
        className="p-5 rounded-lg"
        initialValues={userDetails}
        disabled={disabled}
      >
        <Row gutter={[32, 8]}>
          <Col xs={24} md={24} lg={12} style={{}}>
            <Row gutter={[12, 0]}>
              <Col xs={24} md={24} lg={12} style={{}}>
                <Form.Item
                  label="First Name"
                  name="fastName"
                  rules={[
                    // {
                    //   pattern: /^[\u0980-\u09FF\s]*$/,
                    //   message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                    // },
                    { required: true, message: "First Name is required" },
                  ]}
                >
                  <Input size="large" placeholder="Type First Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={12} style={{}}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    // {
                    //   pattern: /^[\u0980-\u09FF\s]*$/,
                    //   message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                    // },
                    { required: true, message: "Last Name is required" },
                  ]}
                >
                  <Input size="large" placeholder="Type Last Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    // {
                    //   pattern: /^[\u0980-\u09FF\s]*$/,
                    //   message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                    // },
                    { required: true, message: "Email is required" },
                  ]}
                >
                  <Input size="large" placeholder="Type Email" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Contact Number"
                  name="contactNumber"
                  rules={
                    [
                      // {
                      //   pattern: /^[\u0980-\u09FF\s]*$/,
                      //   message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                      // },
                      // { required: true, message: "Email is required" },
                    ]
                  }
                >
                  <Input size="large" placeholder="Type Email" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={
                    [
                      // {
                      //   pattern: /^[\u0980-\u09FF\s]*$/,
                      //   message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                      // },
                      // { required: true, message: "Email is required" },
                    ]
                  }
                >
                  <Input size="large" placeholder="Type address" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24} style={{}}>
                <Form.Item
                  label="Date of birth"
                  name="dateOfBirth"
                  className="w-full h-full"
                  rules={
                    [
                      // {
                      //   pattern: /^[\u0980-\u09FF\s]*$/,
                      //   message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                      // },
                      // { required: true, message: "Email is required" },
                    ]
                  }
                >
                  <DatePicker
                    format={{
                      format: "YYYY-MM-DD",
                      type: "mask",
                    }}
                    defaultValue={dayjs(userInfo.dateOfBirth, "YYYY-MM-DD")}
                    className="w-full"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Mother Tongue" name="motherTongue">
                  <Select
                    placeholder="Select your Mother Tongue"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Bangla", value: "bangla" },
                      { label: "English", value: "english" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Education level" name="educationLevel">
                  <Select
                    placeholder="Select your Education level"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "S.S.C", value: "s.s.c" },
                      { label: "M.A", value: "m.a" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} lg={12} style={{}}>
            <Row gutter={[12, 0]}>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Gender" name="gender">
                  <Select
                    placeholder="Select your Gender"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                      { label: "Other", value: "other" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Religion" name="religion">
                  <Select
                    placeholder="Select your Religion"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Hinduism", value: "hinduism" },
                      { label: "Islam", value: "islam" },
                      { label: "Christianity", value: "christianity" },
                      { label: "Buddhism", value: "buddhism" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Country" name="country">
                  <Select
                    placeholder="Select your Country"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Bangladesh", value: "bangladesh" },
                      { label: "US", value: "us" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={12}>
                <Form.Item label="State" name="state">
                  <Select
                    placeholder="Select your State"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Dhaka", value: "dhaka" },
                      { label: "Noakhali", value: "noakhile" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={12}>
                <Form.Item label="City" name="city">
                  <Select
                    placeholder="Select your City"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Dhaka", value: "dhaka" },
                      {
                        label: "Software engineer",
                        value: "software engineer",
                      },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Occupation" name="occupation">
                  <Select
                    placeholder="Select your Occupation"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Farmer", value: "farmer" },
                      { label: "Noakhali", value: "noakhile" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={24}>
                <Form.Item label="Marital Status " name="maritalStatus ">
                  <Select
                    placeholder="Select your Marital Status "
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {[
                      { label: "Single", value: "Single" },
                      { label: "Married", value: "Married" },
                    ].map((type, index) => (
                      <Select.Option value={type.value} key={index}>
                        {type.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col xs={24} md={24} lg={24}>
            <Form.Item label="A little about myself" name="aboutUs">
              <TextArea
                showCount
                maxLength={50000}
                placeholder="A little about myself"
                style={{ height: 200 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-center items-center">
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </div>
      </Form>
      <div
        onClick={() => setDisable(!disabled)}
        className="absolute top-0 right-0"
      >
        <FiEdit className="text-4xl" />
      </div>
    </div>
  );
}
