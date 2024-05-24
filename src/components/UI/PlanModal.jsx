/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Col, Form, Input, Modal, Row, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



const PlanModal = ({ isModalOpen, setIsModalOpen, handleOk, handleCancel, modalData }) => {
    console.log(modalData)

    const onFinish = (values) => {
        console.log('Received values of form:', values);

    };


    const exitingData = modalData.features.map((feature, index) => ({ key: index, name: feature }))

    return (
        <div>
            <Modal title={modalData.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: 'none' } }}>
                <h2>Set Amount</h2>
                <Input placeholder="50/month" />

                <h2 className="mt-4">Set Other Facilities</h2>
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    autoComplete="off"
                >
                    <Form.List
                        name="planData"
                        initialValue={exitingData}
                    >
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Row key={index}>
                                        <Col lg={24} >
                                            <Form.Item {...field} key={field.key}>
                                                <div className="flex gap-2">
                                                    <Input placeholder="Add new facilities" value={exitingData[field.key]?.name} />
                                                    <MinusCircleOutlined style={{
                                                        color: 'red'
                                                    }} onClick={() => remove(index)} />
                                                </div>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                ))}
                                <Form.Item>
                                    <Button style={{ background: "black", color: 'white' }} type="default" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add More Facilities
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
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

export default PlanModal;