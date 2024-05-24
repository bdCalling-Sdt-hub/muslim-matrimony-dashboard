/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */

import { LockOutlined } from "@ant-design/icons";
import style from "./resetPassword.module.css";
import { Button, Form, Input, ConfigProvider, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { inputThemes } from "../../../themes";
import logo from "../../../assets/Logo.png";
import { useEffect, useState } from "react";
import { useResetPasswordMutation } from "../../../Redux/features/authApi";
import Swal from "sweetalert2";

export default function UpdatePassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [ResetPassword, { isLoading }] = useResetPasswordMutation();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const emailParam = searchParams.get("email");
        const tokenParam = searchParams.get("token");

        setEmail(emailParam || "");
        setToken(tokenParam || "");

        console.log("email", emailParam, "token", tokenParam);

        if (!emailParam && !tokenParam) {
            navigate("/email");
        }
    }, []);

    const handleGoBack = () => {
        navigate("/email");
    }

    const onSubmit = async (data) => {
        try {
            console.log("something", data);
            if (!data.password || !data.confirmPassword) {
                message.error("Please enter password and confirm password");
                return;
            }
            if (data.password !== data.confirmPassword) {
                message.error("Password and Confirm Password must be same");
                return;
            }
            const res = await ResetPassword({ resetData: { email, password: data.password }, token }).unwrap();
            console.log("res", res);
            if (res.statusCode === "200") {
                Swal.fire({
                    icon: 'success',
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate("/signin");
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: error.data.message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                navigate("/email");
            })
        }
    };

    return (
        <ConfigProvider theme={inputThemes}>
            <div>
                <div style={{}}>
                    <div
                        className="flex justify-around items-center"
                        style={{
                            minHeight: "100vh",
                            // backgroundImage: `url(${bgImage})`,
                            backgroundColor: "#FCEAF3",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    >
                        <div>

                            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
                                <div align='middle'>
                                    <img style={{ width: "163px", height: "80px", marginTop: "20px", marginBottom: "20px" }} src={logo} alt="" />
                                </div>
                                <div className={`${style.updatePasswordContainer} mt-2`}>
                                    <div className="title">
                                        <h1 className="text-2xl font-bold mt-5 mb-2 flex items-center " style={{ color: "#FF65C0" }}>
                                            {" "}
                                            <span className="cursor-pointer font-bold me-2 mt-1" onClick={handleGoBack}>
                                                <IoIosArrowBack />
                                            </span>{" "}
                                            Reset Password
                                        </h1>
                                    </div>
                                    {/* form */}
                                    <div className="mt-[40px]">
                                        <Form
                                            name="update-password"
                                            className=""
                                            initialValues={{}}
                                            onFinish={onSubmit}
                                        >
                                            <div>
                                                {/* <label htmlFor="email" className="font-semibold">
                                                    New password
                                                </label> */}
                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        // {
                                                        //     required: true,
                                                        //     message: "Please input your Password!",
                                                        // },
                                                    ]}
                                                >
                                                    <Input
                                                        prefix={
                                                            <LockOutlined className="site-form-item-icon" />
                                                        }
                                                        name="newPassword"
                                                        type="password"
                                                        placeholder=" Enter your password"
                                                        className={style.input}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                {/* <label htmlFor="email" className="font-semibold">
                                                    Confirm Password
                                                </label> */}
                                                <Form.Item
                                                    name="confirmPassword"
                                                    rules={[
                                                        // {
                                                        //     required: true,
                                                        //     message: "Please input your Password!",
                                                        // },
                                                    ]}
                                                >
                                                    <Input
                                                        name="confirmPassword"
                                                        prefix={
                                                            <LockOutlined className="site-form-item-icon" />
                                                        }
                                                        type="password"
                                                        placeholder="Re-enter your password"
                                                        className={style.input}
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
                                                        marginTop: "60px",
                                                    }}
                                                >
                                                    Confirm
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}