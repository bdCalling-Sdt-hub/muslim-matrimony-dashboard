/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
// import SingleNotification from "../../../Components/Notification/SingleNotification";
import { Pagination } from "antd";
// import baseAxios from "../../../../Config";
// import ShowingPegination from "../../../Components/ShowingPegination";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAllNotificationsQuery } from "../../Redux/features/notificationApi";

const Notification = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data } = useAllNotificationsQuery({ page, limit: pageSize })
  const notificationData = data?.data?.attributes?.notificationList;
  const pagination = data?.data?.attributes?.pagination;

  const notificationsDataGetByPagination = (page) => {
    console.log("page", page);
    setPage(page);
  };

  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl bg-[#fceaf3]">
      <div className="p-[40px]">
        <div className="border-siteColor border-b-[1px] pb-[35px] mb-[18px]">
          <h1 className="text-3xl font-semibold">Notification</h1>
        </div>
        <div className="overflow-y-scroll h-[520px]">
          {notificationData?.map((data) => (


            <div className="border-b-[1px] pb-[10px] mt-3">
              <div className="flex">
                <div>
                  <div className="h-[60px] w-[60px] rounded-lg bg-siteColor flex justify-center items-center">
                    <IoMdNotificationsOutline color="white" size={28} />
                  </div>
                </div>
                <div className="flex flex-col ml-2 px-4">
                  <h1 className="text-[20px] font-semibold mt-5]">
                    {data?.message}
                  </h1>
                  <h1 className="text-sm font-normal mt-5]">
                    {new Date(data?.createdAt).toLocaleString()}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div lg={{ span: 12 }}>
              <p className="text-lg font-normal">
                Showing Pegination
                {/* <ShowingPegination pagination={notificationData?.pagination} /> */}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Pagination
                pageSize={pageSize}
                className=""
                defaultCurrent={pagination?.page}
                total={pagination?.totalResults}
                showQuickJumper={false}
                showSizeChanger={false}
                onChange={notificationsDataGetByPagination}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
