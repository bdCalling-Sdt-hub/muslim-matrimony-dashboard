/* eslint-disable no-unused-vars */
import logo from '../../../assets/plan-logo.png';
import check from '../../../assets/check-circle.png';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import PlanModal from '../../../components/UI/PlanModal';

const SubscriptionPlan = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const modalData = {
        title: "Premium Plan",
        description: "Get Dialogi Premium $50/month",
        features: [
            "Ad-free experience",
            "Expanded question pool",
            "Access to additional categories",
        ],
    };

    return (
        <div className='flex gap-2'>
            <div className='border-2 border-[#54A0EC] bg-[#E6F1FC] rounded-md w-[318px] h-[379px] ' onClick={showModal}>
                <div className='p-4'>
                    <div className='flex items-center gap-4'>
                        <img src={logo} alt="" />
                        <p className='text-[24px] font-semibold text-[#1D1D1F]'>Premium</p>
                    </div>
                    <p className='text-[16px] font-semibold text-[#1D1D1F] mt-[21px]'>Get Dialogi Premium $50/month</p>

                    <div className='mt-28'>
                        <div className='flex items-center gap-2 py-2'>
                            <img src={check} alt="" />
                            <p className='text-[14px] font-semibold text-[#1D1D1F]'>Ad-free experience</p>
                        </div>
                        <div className='flex items-center gap-2 py-2'>
                            <img src={check} alt="" />
                            <p className='text-[14px] font-semibold text-[#1D1D1F]'>Expanded question pool</p>
                        </div>
                        <div className='flex items-center gap-2 py-2'>
                            <img src={check} alt="" />
                            <p className='text-[14px] font-semibold text-[#1D1D1F]'>Access to the additional categories</p>
                        </div>
                    </div>
                </div>
            </div>
            <PlanModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel} modalData={modalData}></PlanModal>


        </div>
    );
};

export default SubscriptionPlan;


{/* <div className='border-2 border-[#54A0EC] bg-[#1D1D1F] rounded-md w-[318px] h-[379px]'>
    <div className='p-4'>
        <div className='flex items-center gap-4'>
            <img src={logo} alt="" />
            <p className='text-[24px] font-semibold text-[#FFFFFF]'>Premium Plus</p>
        </div>
        <p className='text-[16px] font-semibold text-[#FFFFFF] mt-[21px]'>Get Dialogi Premium $50/month</p>

        <div className='mt-28'>
            <div className='flex items-center gap-2 py-2'>
                <img src={check} alt="" />
                <p className='text-[14px] font-semibold text-[#FFFFFF]'>Ad-free experience</p>
            </div>
            <div className='flex items-center gap-2 py-2'>
                <img src={check} alt="" />
                <p className='text-[14px] font-semibold text-[#FFFFFF]'>Expanded question pool</p>
            </div>
            <div className='flex items-center gap-2 py-2'>
                <img src={check} alt="" />
                <p className='text-[14px] font-semibold text-[#FFFFFF]'>Access to the additional categories</p>
            </div>
        </div>
    </div>
</div> */}