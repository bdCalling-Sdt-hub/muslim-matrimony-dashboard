import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CategoryModal from "../../../components/UI/CategoryModal";
import { useState } from "react";
import AddCategory from "./AddCategory";
import AddQustion from "./AddQustion";

const CategoriesDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isQusModalOpen, setIsQusModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const showQusModal = () => {
        setIsQusModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        setIsQusModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsQusModalOpen(false);
    };

    const qusList = [
        {
            "id": 1,
            "qus": "1.What does friendship mean to you?"
        },
        {
            "id": 2,
            "qus": "2.Which event has had the most impact on your life?"
        },
        {
            "id": 3,
            "qus": "3.What quality do you value most in a friend?"
        },
        {
            "id": 4,
            "qus": "4.Is there something you've always wanted to do but never did?"
        },
    ]

    return (
        <div>
            <div className="bg-white w-full h-[82vh] rounded-lg">
                <div className="flex justify-between  p-4">
                    <p className="text-[30px] text-[#0071E3] font-semibold">Friends</p>
                    <div className="flex gap-4 h-[36px] items-center justify-center my-auto">
                        <button className="btn border border-black rounded text-[16px] text-black font-semibold p-2" onClick={() => showQusModal()}>Add Question</button>
                        <button className="btn bg-black text-white border-black rounded text-[16px] font-semibold p-2" onClick={() => showModal()}>Edit Category</button>
                    </div>

                </div>
                <CategoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel} >
                    <AddCategory setIsModalOpen={setIsModalOpen} />
                </CategoryModal>
                <CategoryModal isModalOpen={isQusModalOpen} setIsModalOpen={setIsQusModalOpen} handleOk={handleOk} handleCancel={handleCancel} >
                    <AddQustion setIsModalOpen={setIsModalOpen} />
                </CategoryModal>
                <hr />

                <div className="p-4">
                    <p className="text-[18px] text-[#0071E3] font-semibold">Sub Category <span className="text-[18px] text-[#686869] font-semibold ms-[22px]">Close Friends</span></p>
                    {
                        qusList.map((qus, i) => (
                            <div key={i}>
                                <Link to={`/question/${qus.qus}`} state={{ question: qus }}>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[18px] text-[#1D1D1F] font-normal py-3">
                                            {qus?.qus}

                                        </p>
                                        <IoIosArrowForward size={24} color="#0071E3" />

                                    </div>
                                </Link>
                                <hr style={{ borderColor: '#B9B9BA', width: "78vw" }} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default CategoriesDetails;