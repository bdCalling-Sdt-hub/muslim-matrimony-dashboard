import { Image, Modal, Form, Select, Button, Upload, Skeleton, Row, Col, Typography, Carousel } from "antd";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { RiUpload2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useCreateStaticContentsMutation, useGetStaticContentsQuery } from "../../../Redux/features/staticContentApi";

const { Title, Text } = Typography;

const Homepage = () => {
  const { data, isLoading: homepageLoading } = useGetStaticContentsQuery();
  const [createStaticContents] = useCreateStaticContentsMutation();
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);
  const [screenName, setScreenName] = useState('auth');

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("pageName", values.pageName);
    formData.append("screenName", values.screenName);

    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await createStaticContents(formData).unwrap();
      if (res && res.statusCode === "201") {
        Swal.fire({
          icon: 'success',
          title: "Homepage content uploaded successfully",
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          setModalVisible(false);
          setImage(null);
          form.resetFields();
        });
      }
    } catch (err) {
      console.log("🚀 ~ file: onFinish ~ err", err);
      Swal.fire({
        icon: 'error',
        title: err.data.message,
        showConfirmButton: true,
        timer: 1500
      });
    }
  };

  const imageBaseURL = import.meta.env.VITE_IMAGE_BASE_URL;
  const linksData = data?.data?.attributes || [];

  const handleImageUpload = (info) => {
    setImage(info.fileList[info.fileList.length - 1].originFileObj);
    info.fileList = [];
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleScreenNameChange = (value) => {
    setScreenName(value);
    form.setFieldsValue({ pageName: undefined });
  };

  if (homepageLoading) {
    return (
      <div className="py-20 max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} active className="my-32" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto relative overflow-y-auto">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold">Static Contents</h1>
        <div onClick={() => setModalVisible(true)}>
          <Button type="default">+ Add Content</Button>
        </div>
      </div>

      <Carousel autoplay slidesToShow={3} className="max-w-6xl mx-auto">
        {linksData && linksData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
            <div className="w-[300px] h-full relative">
              <Image
                src={imageBaseURL + item.image}
                alt={item.pageName}
                className="object-cover object-center w-full h-[100px]"
                style={{ borderRadius: '8px' }}
                loading="lazy"
              />
              <div className="pt-2 flex flex-col justify-center items-center">
                <Title level={5} style={{ margin: 0 }}>
                  Screen Name: {item.screenName.charAt(0).toUpperCase() + item.screenName.slice(1)}
                </Title>
                <br />
                <Text type="secondary">
                  Page Name: {item.pageName.charAt(0).toUpperCase() + item.pageName.slice(1)}
                </Text>
              </div>
            </div>

          </div>
        ))}
      </Carousel>

      <Modal
        title="Add Content"
        open={modalVisible}
        onCancel={handleModalCancel}
        closeIcon={<GiCancel />}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Screen Name"
            name="screenName"
            initialValue="auth"
            rules={[{ required: true, message: 'Please select screen name' }]}
          >
            <Select onChange={handleScreenNameChange}>
              <Select.Option value="auth">Auth</Select.Option>
              <Select.Option value="home">Home Page</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Page Name"
            name="pageName"
            rules={[{ required: true, message: 'Please select page name' }]}
          >
            <Select>
              {screenName === 'auth' ? (
                <>
                  <Select.Option value="sign-in">Sign-in</Select.Option>
                  <Select.Option value="sign-up">Sign-up</Select.Option>
                </>
              ) : (
                <>
                  <Select.Option value="home">Home</Select.Option>
                  <Select.Option value="about">About</Select.Option>
                </>
              )}
            </Select>
          </Form.Item>
          <Form.Item label="Image" name="image">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageUpload}
            >
              {image ? (
                <div className="flex-col">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="avatar"
                    className="rounded"
                  />
                  <Button
                    className="mt-2 bg-red-600 text-white font-semibold"
                    onClick={handleRemoveImage}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <RiUpload2Line style={{ fontSize: "24px" }} />
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button style={{ background: "black", color: 'white' }} type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Homepage;
