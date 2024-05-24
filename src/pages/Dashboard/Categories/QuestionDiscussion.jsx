/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import chatUserLogo from '../../../assets/nils.png'
import nilsUserLogo from '../../../assets/nils-user.png'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

import CustomPagination from "../../../components/UI/CustomPagination";
import { useState } from "react";

const QuestionDiscussion = () => {
    const { id: qus } = useParams();
    const [page, setCurrentPage] = useState(1);
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate("/categorydetails"); // This will navigate back to the previous page
    };

    console.log(qus)
    return (
        <div className="bg-white h-[82vh] rounded-lg px-4">
            <div className="flex items-center py-4" onClick={handleGoBack}>
                <MdOutlineArrowBackIos size={24} color="#0071E3" />
                <p className="text-[30px] text-[#0071E3] font-semibold  px-2">Question Discussion</p>
            </div>
            <hr style={{ borderColor: '#B9B9BA', width: "78vw" }} />

            <div className="bg-[#dedee1] rounded mt-4">
                <p className="text-[24px] text-[#1D1D1F] p-8">{qus}</p>
            </div>

            <div>
                <p className="text-[24px] text-[#1D1D1F] font-semibold mt-3">User Discussions</p>
            </div>


            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={chatUserLogo} alt="" />
                        <p className="text-[18px] text-[#0071E3] font-normal">Nils</p>
                    </div>
                    <p className="text-[18px] text-[#1D1D1F] font-normal">Fri at 12:00 am</p>
                </div>
                <div className="px-8">
                    <p className="text-[18px] text-[#1D1D1F] font-normal">Nice. Keep going</p>

                    <div>
                        <div className="flex gap-4 py-2">
                            <div className="flex">
                                <BiLike size={24} color="0071E3" />
                                <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                            </div>
                            <div className="flex">
                                <BiDislike size={24} color="0071E3" />
                                <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <img src={nilsUserLogo} alt="" />
                                <p className="text-[18px] text-[#0071E3] font-normal px-2">Nils</p>
                            </div>
                            <div className=" px-10">
                                <p className="text-[18px] text-[#1D1D1F] font-normal py-1">Wow</p>
                                <div className="flex gap-4 py-2">
                                    <div className="flex">
                                        <BiLike size={24} color="0071E3" />
                                        <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                                    </div>
                                    <div className="flex">
                                        <BiDislike size={24} color="0071E3" />
                                        <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={chatUserLogo} alt="" />
                        <p className="text-[18px] text-[#0071E3] font-normal">Nils</p>
                    </div>
                    <p className="text-[18px] text-[#1D1D1F] font-normal">Fri at 12:00 am</p>
                </div>
                <div className="px-8">
                    <p className="text-[18px] text-[#1D1D1F] font-normal">Nice. Keep going</p>

                    <div>
                        <div className="flex gap-4 py-2">
                            <div className="flex">
                                <BiLike size={24} color="0071E3" />
                                <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                            </div>
                            <div className="flex">
                                <BiDislike size={24} color="0071E3" />
                                <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <img src={nilsUserLogo} alt="" />
                                <p className="text-[18px] text-[#0071E3] font-normal px-2">Nils</p>
                            </div>
                            <div className=" px-10">
                                <p className="text-[18px] text-[#1D1D1F] font-normal py-1">Wow</p>
                                <div className="flex gap-4 py-2">
                                    <div className="flex">
                                        <BiLike size={24} color="0071E3" />
                                        <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                                    </div>
                                    <div className="flex">
                                        <BiDislike size={24} color="0071E3" />
                                        <p className="text-[18px] text-[#0071E3] font-normal px-2">34</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between text-[18px] font-medium py-5">
                <div >
                    <p>SHOWING 1-12 OF 250</p>
                </div>
                <div>
                    <CustomPagination pageSize={5}
                        total={50}
                        size="large"
                        handleOnChange={(page) => {
                            setCurrentPage(page);
                        }} /></div>
            </div>
        </div>
    );
};

export default QuestionDiscussion;