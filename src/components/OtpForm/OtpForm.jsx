/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Col, Input, Row } from "antd";
import { useRef, useState } from "react";
import style from "./OtpForm.module.css";

const OtpForm = ({ btnText, btnStyle, otpBoxStyle, containerStyle, handleOtpSubmit, }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [otpError, setOtpError] = useState("");
    const otpBoxReference = useRef([]);

    const handleChange = (value, index) => {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);
        if (value && index < 5) {
            otpBoxReference.current[index + 1].focus();
        }
    };

    const handleBackspaceAndEnter = (e, index) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            otpBoxReference.current[index - 1].focus();
        }
        if (e.key === "Enter" && e.currentTarget.value && index < 5) {
            otpBoxReference.current[index + 1].focus();
        }
    };

    const handleSubmit = () => {
        handleOtpSubmit(otp.join(""), otpError);
    };

    const resendOtp = () => {
        // Add your logic for resending OTP
    };

    return (
        <div className={`${containerStyle} mt-2 flex flex-col`} style={{ height: "300px" }}>
            <Row gutter={16}>
                {otp.map((digit, index) => (
                    <Col lg={4} key={index} className="text-center">
                        <Input
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                            ref={(reference) => (otpBoxReference.current[index] = reference)}
                            className={`${style.otpInput} ${otpBoxStyle}`}
                        />
                    </Col>
                ))}
            </Row>
            <div className="flex justify-between my-2">
                <p>Don't received code?</p>
                <a
                    className="reset-password-resend text-black font-semibold hover:text-customPrimary"
                    onClick={resendOtp}
                    href="#"
                >
                    Resend
                </a>
            </div>
            <div>
                {/* <Button
                    style={{
                        fontSize: "18px",
                        background: "#D0A65A",
                        marginTop: "44px"
                    }}
                    onClick={handleSubmit}
                    // type="primary"
                    disabled={otp.join("").length !== 6}
                    htmlType="submit"
                    className={`${style.otpButton}`}
                    block
                >
                    {btnText}
                </Button> */}

                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    disabled={otp.join("").length !== 6}
                    // className={`${style.otpButton}`}
                    onClick={handleSubmit}
                    block
                    style={{
                        height: "45px",
                        fontWeight: "400px",
                        fontSize: "18px",
                        background: "#FF65C0",
                        marginTop: "44px"
                    }}
                >
                    {btnText}
                </Button>
            </div>
        </div>
    );
};

export default OtpForm;
