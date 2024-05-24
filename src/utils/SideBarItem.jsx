/* eslint-disable no-unused-vars */
import { LuLayoutTemplate } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { FaRegCreditCard, FaUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { TbCategoryPlus } from "react-icons/tb";
// import { LuBadgeCheck } from "react-icons/lu";
import { FaCog } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";

export const SideBarItem = [
  {
    key: "/",
    icon: <LuLayoutTemplate size={22} />,
    label: "Dashboard",
  },
  {
    key: "/users",
    icon: <FaUsers size={22} />,
    label: "Users",
    // children: [
    //     {
    //         key: '/free-users',
    //         label: 'Free Users',
    //     },
    //     {
    //         key: '/premium-users',
    //         label: 'Premium Users',
    //     },
    //     {
    //         key: '/premium-plus-users',
    //         label: 'Premium Plus Users',
    //     },
    // ]
  },
  // {
  //   key: "/shop",
  //   icon: <BsShop size={22} />,
  //   label: "Shop",
  // },
  // {
  //   key: "/event",
  //   icon: <MdEvent size={22} />,
  //   label: "Event",
  // },
  {
    key: "/earnings",
    icon: <FaRegCreditCard size={22} />,
    label: "Earnings",
    // children: [
    //     {
    //         key: '/today',
    //         label: 'Today',
    //     },
    //     {
    //         key: '/weekly',
    //         label: 'Weekly',
    //     },
    //     {
    //         key: '/monthly',
    //         label: 'Monthly',
    //     },
    // ]
  },
  // {
  //   key: "/wallet",
  //   icon: <TbCategoryPlus size={22} />,
  //   label: "Wallet",
  // },
  // {
  //     key: '/categories',
  //     icon: <TbCategoryPlus size={22} />,
  //     label: 'Categories',
  // },
  // {
  //     key: '/subscription-plan',
  //     icon: <LuBadgeCheck size={22} />,
  //     label: 'Subscription Plan',
  // },
  {
    key: "/membership",
    icon: <MdCardMembership size={22} />,
    label: "Membership",
  },
  {
    key: "/settings",
    icon: <FaCog size={22} />,
    label: "Settings",
  },
  {
    key: "/logout",
    label: "Log Out",
    icon: <TbLogout size={22} color="red" />,
    // style: { marginTop: '80%' },
  },
];
