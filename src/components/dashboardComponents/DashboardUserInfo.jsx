/ eslint-disable no-unused-vars /
import { Col } from "antd";
import { FaUserGroup } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useTotalCountsQuery } from "../../Redux/features/earningApi";
import { formatNumber } from "../../utils/numberFormatter";
import { FaGlobeAmericas } from "react-icons/fa";

const DashboardUserInfo = () => {
  const {data} = useTotalCountsQuery();
  console.log("data", data);
  const totalPayments = data?.data?.attributes.totalPayments;
  const totalUsers = data?.data?.attributes.totalUsers;
  const countryData = data?.data?.attributes.country;
  return (
    <div className="flex flex-row">
      <Col>
        <div className="flex justify-center items-center border-r-2 gap-6 p-[12px] bg-white rounded-lg">
          <div className="pr-6">
            <FaHandHoldingDollar className="h-12 w-fit text-siteColor" />
          </div>
          <div>
            <p className="text-2xl">Total Earnings</p>
            <p className="text-siteColor text-2xl text-center font-semibold mt-1">
              ${formatNumber(totalPayments) || 0}
            </p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="flex justify-center items-center border-r-2 p-[12px] gap-6 bg-white rounded-lg">
          <div className="pr-6">
            <FaUserGroup size={60} className="text-siteColor" />
          </div>
          <div>
            <p className="text-2xl">Total Users</p>
            <p className="text-siteColor text-2xl font-semibold text-center mt-1">
              {formatNumber(totalUsers) || 0}
            </p>
          </div>
        </div>
      </Col>
      <Col span={9}>
        <div className="flex justify-center items-center border-r-2 p-[12px] gap-6 bg-white rounded-lg">
          <div className="pr-6">
            <FaGlobeAmericas size={60} className="text-siteColor" />
          </div>
          <div>
            {
              countryData && countryData!==null ? (
                <><p className="text-2xl">Total {countryData.count} Users from</p>
                <p className="text-siteColor text-2xl font-semibold text-center mt-1">
                  {countryData._id}
                </p></>
              ):(<p className="text-2xl">No Specific Country Found</p>)
            }
          </div>
        </div>
      </Col>
    </div>
  );
};

export default DashboardUserInfo;
