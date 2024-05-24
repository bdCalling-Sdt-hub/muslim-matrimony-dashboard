/* eslint-disable no-unused-vars */
import { useState } from 'react';
import categoryimage from '../../../assets/categoryimage.png'
import CategoryModal from '../../../components/UI/CategoryModal';
import { useNavigate } from 'react-router-dom';
import AddCategory from './AddCategory';
const Categories = () => {

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

    const navigate = useNavigate()

    const handleCategoryDetails = () => {
        navigate('/categorydetails')
        console.log("Hello")
    }


    const categoryData = {
        ategory: "Friends",
        subCategory: [
            {
                title: "Close Friends"
            },
            {
                title: "Close Friends"
            }
        ],
        questions: [
            {
                question: "What does friendship mean to you?"
            },
        ],
    };

    return (
        <div>
            <div className="bg-white w-full h-[82vh] rounded-lg">
                <div className="flex justify-between  p-4">
                    <p className="text-[30px] text-[#0071E3] font-semibold">Categories</p>
                    <div className="flex gap-4 h-[36px] items-center justify-center my-auto">
                        <button className="btn border border-black rounded text-[18px] text-black font-semibold p-2" onClick={showModal}>Add Category</button>

                    </div>

                </div>
                <CategoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel} >
                    <AddCategory setIsModalOpen={setIsModalOpen} />
                </CategoryModal>  
                <hr />

                <div className='w-[243px] h-[256px] flex flex-col justify-center items-center shadow-lg shadow-[#c3bebe] rounded-lg m-4' onClick={handleCategoryDetails}>
                    <img src={categoryimage} alt="" />
                    <p className="text-[24px] text-[#0071E3] font-semibold">Friends</p>
                    <p className="text-[18px] text-black font-normal">Ques. 40</p>

                </div>

            </div>
        </div>
    );
};

export default Categories;