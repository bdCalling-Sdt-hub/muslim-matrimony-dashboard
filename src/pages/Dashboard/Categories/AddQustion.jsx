/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import { Button, Input, Switch, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const AddQustion = ({ setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log('Received values of form:', values);
        setIsModalOpen(false)
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center">


                <div className="mt-[24px]">
                    <div className="flex items-center justify-between">
                        <p className="text-[#1D1D1F] text-[24px] py-2 font-bold">Add Question</p>
                        <div className="flex items-center">
                            <p className="text-[#1D1D1F] text-[24px] py-2 px-2 font-bold">Share</p>
                            <Switch defaultChecked onChange={onChange} />
                        </div>
                    </div>
                    <p className="text-[#1D1D1F] text-[18px] py-2 font-bold">Sub Category</p>
                    <Input className="" placeholder="Enter sub category name" />
                    <Input prefix="?" className="mt-4" placeholder="Enter your question" />
                    <div className="flex gap-2">
                        <Button className="border border-red-500" onClick={() => onFinish()} style={{ color: 'red', marginTop: "30px" }} type="default" block>
                            Cancel
                        </Button>
                        <Button onClick={() => onFinish()} style={{ background: "black", color: 'white', marginTop: "30px" }} type="default" block icon={<PlusOutlined />}>
                            Add Question
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQustion;