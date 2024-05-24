/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal } from "antd";



const CategoryModal = ({ children, isModalOpen, setIsModalOpen, handleOk, handleCancel, modalData }) => {


    console.log(children)

    return (
        <div>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: 'none' } }}>
                {children}
            </Modal>
        </div>
    );
};

export default CategoryModal;