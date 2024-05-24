import { Col } from 'antd';
import { FaUserGroup } from 'react-icons/fa6';
import business from '../../../assets/business.png'
import shopping from '../../../assets/shopping.png'
import organization from '../../../assets/organization.png'

const DashboardUserInfo = () => {
    return (
        <div className="flex flex-col gap-4 ms-4">
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <FaUserGroup size={60} />
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
                        </p>
                        <p className="text-[20px] text-[#454545] font-light">
                            Total Account
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <img src={organization}></img>
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
                        </p>
                        <p className="text-[19px] text-[#454545] font-light">
                            Organization Account
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <img src={shopping}></img>
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
                        </p>
                        <p className="text-[20px] text-[#454545] font-light">
                            Shopping Account
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <img src={business}></img>
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
                        </p>
                        <p className="text-[20px] text-[#454545] font-light">
                            Business Account
                        </p>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default DashboardUserInfo;