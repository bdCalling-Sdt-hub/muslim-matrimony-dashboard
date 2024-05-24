import { Col, ConfigProvider, Form, Input, Row } from 'antd';
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo.png";
import { inputThemes } from '../../themes';
import { useSignInMutation } from '../../Redux/features/authApi';
import Swal from 'sweetalert2';
import { setLocalStorageItem } from '../../utils/storageService';

const Signin = () => {
    const navigate = useNavigate()
    const [signIn] = useSignInMutation();
    const onFinish = async (values) => {
        if(!values.email || !values.password){
            Swal.fire({
                icon: 'error',
                title: 'Please enter email and password',
                showConfirmButton: true,
                timer: 1500
            })
            return;
        }
        try {
            const res = await signIn(values).unwrap()
            console.log("res", res)
            if (res && res.statusCode === "200" && res.data.attributes.role !== "user") {
                console.log("res", res.data)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Success',
                    showConfirmButton: true,
                    timer: 1500
                }).then(() => {
                    setLocalStorageItem("token", res.data.accessToken)
                    setLocalStorageItem("user", res.data.attributes)
                    navigate("/")
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        catch (err) {
            console.log("err", err)
            Swal.fire({
                icon: 'error',
                title: err.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const handleForget = () => {
        navigate("/email")
    }


    return (
        <ConfigProvider theme={inputThemes}>
            <div>

                <Row
                    justify="center"
                    align='middle'

                    // style={{ minHeight: "100vh", backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    style={{ minHeight: "100vh", backgroundColor: `#FCEAF3`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                    <Col lg={6}
                        style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
                        <Col align='middle'>
                            <img style={{ width: "163px", height: "80px", marginTop: "20px", marginBottom: "20px" }} src={logo} alt="" />
                            <p style={{ fontSize: "30px", fontWeight: "normal", color: "black", textAlign: "left" }}>Sign in to continue!</p>
                            {/* <p style={{ fontSize: "20px", fontWeight: "normal", color: "#1E1E1E" }}>Please sign in for better experience</p> */}
                        </Col>

                        <Col style={{ marginTop: "40px" }}>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        // {
                                        //     required: true,
                                        //     message: 'Please input your Username!',
                                        // },
                                    ]}
                                >
                                    <Input style={{ padding: "10px 10px" }} prefix={<MdEmail className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        // {
                                        //     required: true,
                                        //     message: 'Please input your Password!',
                                        // },
                                    ]}
                                >
                                    <Input.Password
                                        style={{ padding: "10px 10px" }}
                                        prefix={<IoMdLock className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>


                                    <div
                                        className="login-form-forgot"
                                        style={{ color: "red", cursor: "pointer", fontStyle: "bold" }}
                                        onClick={handleForget}
                                    >
                                        Forgot password
                                    </div>

                                </Form.Item>

                                <Form.Item>
                                    <button style={{ width: "100%", backgroundColor: "#FF65C0", color: "white", padding: "10px", fontSize: "20px", borderRadius: "10px" }} type="submit" className="login-form-button">
                                        Sign in
                                    </button>
                                </Form.Item>
                            </Form>
                        </Col>

                    </Col>


                </Row>
            </div >
        </ConfigProvider>
    );
};

export default Signin;