import { Image, Radio, Modal, Form, Select, Button, Input, Checkbox, Pagination, Empty } from "antd";
import React, { useState } from "react";
import { AllImage } from "../../../assets/AllImage";
import { GiCancel } from "react-icons/gi";
import { useCreateSubscriptionMutation, useDeleteSubscriptionMutation, useGetSubscriptionsQuery, useUpdateSubscriptionMutation } from "../../../Redux/features/subscriptionApi";
import Swal from "sweetalert2";

export default function Membership() {
  const [selectedMembership, setSelectedMembership] = useState("Gold");
  const [editModalVisible, setEditModalVisible] = useState(false); 
  const [selectedItem, setSelectedItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [isMessageAvailable, setIsMessageAvailable] = useState(false);
  const [isMessageUnlimited, setIsMessageUnlimited] = useState(false);
  const [form] = Form.useForm(); // Create form instance
  const [createSubscription] = useCreateSubscriptionMutation();
  const [deleteSubscription] = useDeleteSubscriptionMutation();
  const [updateSubscription] = useUpdateSubscriptionMutation();

  const [rank, setRank] = useState({
    Gold: 3,
    Silver: 2,
    Bronze: 1
  });

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
  };

  const handleEditModalOpen = (value) => {
    setEditModalVisible(true);
    setSelectedItem(value);
    console.log("🚀 ~ file:  ~ value", value)
  };

  const limit = 1;
  const [page, setPage] = useState(1);
  const { data } = useGetSubscriptionsQuery({
    name: selectedMembership,
    page: page,
    limit: limit
  })
  const subscriptionData = data?.data?.attributes.subscriptions;
  const pagination = data?.data?.attributes.pagination;

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const subsPageChange = (page) => {
    setPage(page);
  }

  const onFinishEdit = async (values) => {
    const updatedItem = { ...selectedItem, ...values }; // Merge selectedItem with new values
    updatedItem.messageCount = parseInt(values.messageCount); // Convert messageCount to integer
    updatedItem.duration = values.duration * 30; // Convert duration to days
    
    try{
      const res = await updateSubscription(updatedItem).unwrap();
      console.log("🚀 ~ file: onFinishEdit ~ res", res)
      if(res && res.statusCode === "200"){
        Swal.fire({
          icon: 'success',
          title: "Subscription updated successfully",
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          setEditModalVisible(false);
          form.resetFields();
        })
      }
    }
    catch(err){
      console.log("🚀 ~ file: onFinishEdit ~ err", err)
      Swal.fire({
        icon: 'error',
        title: err.data.message,
        showConfirmButton: true,
        timer: 1500
      })
    }
  };
  

  const onFinish = async (value) => {
    const { name, duration, price, isMessageAvailable, isMessageUnlimited, messageCount } = value;
    const data = {
      name,
      duration: duration * 30,
      price,
      rank: rank[name],
      isMessageAvailable,
      isMessageUnlimited,
      messageCount
    }
    try {
      const res = await createSubscription(data).unwrap();
      if (res && res.statusCode === "201") {
        Swal.fire({
          icon: 'success',
          title: "Subscription created successfully",
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          setModalVisible(false);
          form.resetFields();
        })
      }
    }
    catch (err) {
      console.log("🚀 ~ file:  onFinish ~ err", err)
      Swal.fire({
        icon: 'error',
        title: err.data.message,
        showConfirmButton: true,
        timer: 1500
      })
    }
  };

  const handleClick = (membership) => {
    setSelectedMembership(membership);
  };

  const deleteASubscription = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Call deleteSubscription API
        console.log("Delete Subscription", id);
        try {
          const res = await deleteSubscription({ id }).unwrap();
          if (res && res.statusCode === "201") {
            Swal.fire({
              icon: 'success',
              title: "Subscription deleted successfully",
              showConfirmButton: true,
              timer: 1500
            })
          }
        }
        catch (err) {
          console.log("🚀 ~ file:  deleteASubscription ~ err", err)
          if (err.data) {
            Swal.fire({
              icon: 'error',
              title: err.data.message,
              showConfirmButton: true,
              timer: 1500
            })
          }
        }
      }
    });
  }


  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => setModalVisible(true)}
          className="text-black font-bold border border-[#FF65C0] hover:bg-[#FF65C0] hover:text-white">
          Add Membership
        </Button>


      </div>

      <div className="grid grid-cols-3 gap-5 text-5xl text-center cursor-pointer">
        <div
          className={`flex justify-center items-center p-4 rounded-lg ${selectedMembership === "Gold" ? "bg-[#FF65C0] text-white" : "bg-white text-[#FF65C0]"
            }`}
          onClick={() => handleClick("Gold")}
        >
          <Image className="mt-1" src={AllImage.start1} width={50} />
          <h1>Gold</h1>
        </div>
        <div
          className={`flex justify-center items-center p-4 rounded-lg ${selectedMembership === "Silver" ? "bg-[#FF65C0] text-white" : "bg-white text-[#FF65C0]"
            }`}
          onClick={() => handleClick("Silver")}
        >
          <Image className="mt-1" src={AllImage.start2} width={50} />
          <h1>Silver</h1>
        </div>
        <div
          className={`flex justify-center items-center p-4 rounded-lg ${selectedMembership === "Bronze" ? "bg-[#FF65C0] text-white" : "bg-white text-[#FF65C0]"
            }`}
          onClick={() => handleClick("Bronze")}
        >
          <Image className="mt-1" src={AllImage.start3} width={50} />
          <h1>Bronze</h1>
        </div>
      </div>

      {/* membership list */}
      <div className="flex flex-col justify-center items-center">
        {
          subscriptionData && subscriptionData.length > 0 ? (
            <div className="w-full">
              {
                subscriptionData.map((item, index) => (
                  <div className="bg-white p-5 rounded-lg my-4 w-full ">
                    <div className="flex justify-center items-center gap-2 p-4  ">
                      <Image className="mt-1" src={AllImage.start1} width={50} />
                      <h1 className="text-[#FF65C0] text-4xl ">{item.name} Membership</h1>
                    </div>
                    <div className="text-white text-center rounded-tl-[5rem] rounded-br-[5rem] bg-[#FF65C0] p-5">
                      <h1 className="text-4xl">${item.price} for {item.duration / 30} month</h1>
                      <p className="text-2xl">Renews after {item.duration / 30} month</p>
                    </div>
                    <div className="mt-6 max-w-5xl mx-auto space-y-3">
                      <div className="flex justify-start items-center gap-2">
                        <Radio style={{ color: 'red' }} checked></Radio>
                        <p className="text-3xl">
                          {item.isMessageAvailable ? "Messaging feature avaibale" : "Messaging feature is not avaibale here"}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <Radio checked></Radio>
                        <p className="text-3xl">
                          {item.isMessageUnlimited ? "Connect with as much people as you want" : `Can connect upto ${item.messageCount} people only`}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 my-4 mt-10">
                      <button onClick={()=> handleEditModalOpen(item)} className="bg-[#FF65C0] py-3 px-5 rounded-lg w-40 text-white text-center text-3xl">Edit</button>
                      <button onClick={() => deleteASubscription(item._id)} className="py-3 px-5 text-3xl rounded-lg w-40 border border-[#FF65C0]">Delete</button>
                    </div>
                  </div>
                ))
              }
              <div style={{ textAlign: "right" }}>
                <Pagination
                  pageSize={limit}
                  className=""
                  defaultCurrent={pagination?.page}
                  total={pagination?.totalResults}
                  showQuickJumper={false}
                  showSizeChanger={false}
                  onChange={subsPageChange}
                />
              </div>
            </div>
          ) : (
            <div className="pt-52 flex justify-center items-center h-full">
              <Empty description="No Data Found" />
            </div>

          )
        }
      </div>
      {/* Add Membership Modal */}
      <Modal
        title="Select Membership"
        open={modalVisible}
        onCancel={handleModalCancel}
        closeIcon={<GiCancel />}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="Membership" name="name" initialValue="Gold">
            <Select>
              <Option value="Gold">Gold</Option>
              <Option value="Silver">Silver</Option>
              <Option value="Bronze">Bronze</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Duration" name="duration" initialValue={1} rules={[{ required: true, message: 'Please enter duration' }]}>
            <Input type="number" min={1}/>
          </Form.Item>
          <Form.Item label="Price" name="price" initialValue={1} rules={[{ required: true, message: 'Please enter price' }]}>
            <Input type="number" min={1}/>
          </Form.Item>
          <Form.Item label="Chat Feature" name="isMessageAvailable" valuePropName="checked" initialValue={false}>
            <Checkbox onChange={(e) => setIsMessageAvailable(e.target.checked)}>Chat Available</Checkbox>
          </Form.Item>
          <Form.Item label="Chat Unlimited" name="isMessageUnlimited" valuePropName="checked" initialValue={false}>
            <Checkbox disabled={!isMessageAvailable} onChange={(e) => setIsMessageUnlimited(e.target.checked)}>Unlimited</Checkbox>
          </Form.Item>
          <Form.Item label="Chat Count" name="messageCount" initialValue={0} rules={[{ required: true, message: 'Please enter chat count' }]}>
            <Input type="number" disabled={(isMessageUnlimited || !isMessageAvailable)} min={1}/>
          </Form.Item>
          <Form.Item>
            <Button style={{ background: "black", color: 'white' }} type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* Edit Modal */}
      <Modal
        title="Edit Membership"
        open={editModalVisible}
        onCancel={handleEditModalCancel}
        closeIcon={<GiCancel />}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinishEdit}>
          <Form.Item label="Membership" name="name" initialValue={selectedItem.name}>
            <Select>
              <Option value="Gold">Gold</Option>
              <Option value="Silver">Silver</Option>
              <Option value="Bronze">Bronze</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Duration" name="duration" initialValue={selectedItem?.duration/30} rules={[{ required: true, message: 'Please enter duration' }]}>
            <Input type="number" min={1}/>
          </Form.Item>
          <Form.Item label="Price" name="price" initialValue={selectedItem.price} rules={[{ required: true, message: 'Please enter price' }]}>
            <Input type="number" min={1}/>
          </Form.Item>
          <Form.Item label="Chat Feature" name="isMessageAvailable" valuePropName="checked" initialValue={selectedItem.isMessageAvailable}>
            <Checkbox onChange={(e) => setIsMessageAvailable(e.target.checked)}>Chat Available</Checkbox>
          </Form.Item>
          <Form.Item label="Chat Unlimited" name="isMessageUnlimited" valuePropName="checked" initialValue={selectedItem.isMessageUnlimited}>
            <Checkbox onChange={(e) => setIsMessageUnlimited(e.target.checked)}>Unlimited</Checkbox>
          </Form.Item>
          <Form.Item label="Chat Count" name="messageCount" initialValue={selectedItem.messageCount} rules={[{ required: true, message: 'Please enter chat count' }]}>
            <Input type="number" min={1}/>
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
}
