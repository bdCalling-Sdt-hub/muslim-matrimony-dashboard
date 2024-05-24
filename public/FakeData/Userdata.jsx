import { FaEye } from "react-icons/fa";

export const columns = [
  {
    title: <p className="text-blue500">Name</p>,
    dataIndex: "name",
  },
  {
    title: <p className="text-blue500">Name</p>,
    dataIndex: "email",
  },
  {
    title: <p className="text-blue500">Name</p>,
    dataIndex: "number",
  },
  {
    title: <p className="text-blue500">Name</p>,
    // eslint-disable-next-line no-unused-vars
    render: function (data) {
      return (
        <div className="text-blue500">
          <FaEye />
        </div>
      );
    },
  },
];

export const data = [
  {
    key: "1",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    number: "2746478994",
  },
  {
    key: "2",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    number: "2746478994",
  },
  {
    key: "3",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    number: "2746478994",
  },
  {
    key: "4",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    number: "2746478994",
  },
  {
    key: "5",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    number: "2746478994",
  },
  {
    key: "6",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    number: "2746478994",
  },
];
