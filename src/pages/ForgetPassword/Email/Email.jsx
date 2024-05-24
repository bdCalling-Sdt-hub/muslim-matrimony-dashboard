/* eslint-disable react/no-unescaped-entities */
import { MailOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import style from "./email.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import logo from "../../../assets/Logo.png";
import { inputThemes } from "../../../themes";
import { useForgetPasswordMutation } from "../../../Redux/features/authApi";
import Swal from "sweetalert2";

export default function Email() {
    const navigate = useNavigate();
    const [forgetPassword, {isLoading}] = useForgetPasswordMutation();
    const onSubmit = async (data) => {
        if(!data.email){
            message.error("Please enter email");
            return;
        }
        try {
            const res = await forgetPassword(data).unwrap();
            if(res && res.statusCode === "200"){
                Swal.fire({
                    icon: 'success',
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate("/signin")
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: error.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const redirectSignin = () => {
        navigate("/signin");
    };

    return (
        <ConfigProvider theme={inputThemes}>
            <div>
                <Flex
                    align="center"
                    style={{
                        minHeight: "100vh",
                        // backgroundImage: `url(${bgImage})`,
                        backgroundColor: "#FCEAF3",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    justify="space-around"
                >

                    <div>
                        <div>
                            <div

                                style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
                                <div align='middle'>
                                    <img style={{ width: "163px", height: "80px", marginTop: "20px", marginBottom: "20px" }} src={logo} alt="" />
                                </div>
                                <div className="title">

                                    <h1 className="text-2xl font-bold mt-5 mb-2 flex items-center" style={{ color: "#FF65C0" }}>
                                        {" "}
                                        <span
                                            onClick={redirectSignin}
                                            className="cursor-pointer font-bold me-2 mt-1"
                                        >
                                            <IoIosArrowBack />
                                        </span>{" "}
                                        Forget Password
                                    </h1>
                                    <p className="mt-[24px] mb-[24px]">
                                        Please enter your email address  to reset your password {" "}
                                    </p>
                                </div>
                                {/* form */}
                                <div className={`${style.formContainer} mt-2`}>
                                    <Form
                                        name="forgetPasswordEmailFrom"
                                        className="forgetPassword-form mt-2"
                                        initialValues={{}}
                                        onFinish={onSubmit}
                                    >
                                        <div>
                                            {/* <label htmlFor="email" className="font-bold">
                                                Email
                                            </label> */}
                                            <Form.Item
                                                name="email"
                                                id="email"
                                                rules={[
                                                    // {
                                                    //     required: true,
                                                    //     message: "Please input your email!",
                                                    // },
                                                ]}
                                            >
                                                <Input
                                                    prefix={
                                                        <MailOutlined className="site-form-item-icon" />
                                                    }
                                                    placeholder="Enter your email"
                                                    type="email"
                                                    className={`${style.input}`}
                                                />
                                            </Form.Item>
                                        </div>

                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="login-form-button"
                                                block
                                                style={{
                                                    height: "45px",
                                                    fontWeight: "400px",
                                                    fontSize: "18px",
                                                    background: "#FF65C0",
                                                    marginTop: "44px"
                                                }}
                                                disabled={isLoading}
                                            >
                                                Send OTP
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </div>
        </ConfigProvider>
    );
}

