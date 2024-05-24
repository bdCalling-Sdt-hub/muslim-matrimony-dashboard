import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideBarItem } from "../utils/SideBarItem";
const { Header, Sider, Content } = Layout;
import logo from "../assets/Logo.png";
import { menuSideBarItems } from "../themes/index";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { clearLocalStorageItems, getLocalStorageItem, setLocalStorageItem } from "../utils/storageService";
import Swal from "sweetalert2";
import { io } from "socket.io-client";
import notificationSound from "../assets/notificationsound.mp3";

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const socket = io(import.meta.env.VITE_SOCKET_ENDPOINT)
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        const notificationCount = Number(getLocalStorageItem("notificationCount"));
        setNotificationCount(notificationCount);
    }, [])
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    useEffect(() => {
        const handleNotificationEvent = (data) => {
            if (data.status === 1008) {
                const audio = new Audio(notificationSound);
                audio.play();

                const notificationCount = Number(getLocalStorageItem("notificationCount")) || 0;
                const updatedCount = notificationCount + 1;

                setLocalStorageItem("notificationCount", updatedCount);
                setNotificationCount(updatedCount);
            }
        };
        socket.on("mmXX00-45YY-NNXX-admin-notification", handleNotificationEvent);
        return () => {
            // Clean up the event listener when the component is unmounted
            socket.off("mmXX00-45YY-NNXX-admin-notification", handleNotificationEvent);
            socket.disconnect();
        };
    }, []);

    const handleGoHomePage = () => {
        navigate("/");
    };

    const handleMenuSelect = ({ key }) => {
        if (key === "/logout") {
            clearLocalStorageItems();
            Swal.fire({
                icon: "success",
                title: "Logout Success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                navigate("/signin");
            })
        } else {
            navigate(key);
        }

    };
    const { pathname } = useLocation();

    const [activeButton, setActiveButton] = useState(null);

    const handleNotification = () => {
        setLocalStorageItem("notificationCount", 0);
        setNotificationCount(0);
        setActiveButton('notification');
        navigate("/notifications");
        console.log("Notification button clicked!");
    };

    const handleProfile = () => {
        setActiveButton('profile');
        navigate("/profile");
    };

    const user = getLocalStorageItem("user");
    if (user.role === 'admin') {
        const subAdminItemExists = SideBarItem.some(item => item.key === "/sub-admin");

        if (!subAdminItemExists) {
            SideBarItem.splice(1, 0, { // Inserting at index 1 after Dashboard
                key: "/sub-admin",
                icon: <FaUser size={22} />,
                label: "Sub Admin",
            });
        }
    }

    return (
        <ConfigProvider theme={menuSideBarItems}>
            <Layout style={{}}>
                <Sider
                    width="300px"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{
                        height: "100vh",
                        backgroundColor: "#FCEAF3",
                    }}
                >
                    <div className="demo-logo-vertical" />

                    <div
                        className="logo"
                        style={{
                            background: "#FCEAF3",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <div onClick={handleGoHomePage} style={{ cursor: "pointer" }}>
                            <img
                                style={{
                                    marginTop: "44px",
                                    marginBottom: "20px",
                                }}
                                src={logo}
                            />
                        </div>
                    </div>

                    <ConfigProvider theme={menuSideBarItems}>
                        <Menu
                            onClick={handleMenuSelect}
                            style={{
                                backgroundColor: "#FCEAF3",
                                color: "black",
                                marginTop: "10px",
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                paddingBlockEnd: "1rem",
                                border: "none",                                // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                                // borderRadius: "10px",
                                width: `${collapsed ? "80px" : "290px"}`,
                            }}
                            selectedKeys={[pathname]}
                            mode="inline"
                            // defaultSelectedKeys={['1']}
                            items={SideBarItem}
                        />
                    </ConfigProvider>
                </Sider>

                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            backgroundColor: "#FDFDFD",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                color: "#FF65C0",
                                width: 64,
                                height: 64,
                            }}
                        />

                        <div className="pr-8">
                            <Button
                                // className="shadow-md"
                                className={`shadow-md ${activeButton === 'notification' ? 'bg-[#FF65C0]' : 'bg-[#451b33]'}`}
                                type="text"
                                icon={<FaBell color="#ffffff" size={24} />}
                                onClick={() => {
                                    handleNotification()
                                }}
                                style={{
                                    fontSize: "16px",
                                    width: 52,
                                    height: 52,
                                    marginRight: "16px"
                                }}
                            >
                                {
                                    notificationCount > 0 && (
                                        <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                            {notificationCount}
                                        </div>
                                    )
                                }
                            </Button>
                            <Button
                                // className="shadow-md"
                                className={`shadow-md ${activeButton === 'profile' ? 'bg-[#FF65C0]' : 'bg-[#451b33]'}`}
                                type="text"
                                icon={<FaUser color="#ffffff" size={24} />}
                                onClick={() => {
                                    handleProfile()
                                }}
                                style={{
                                    fontSize: "16px",
                                    width: 52,
                                    height: 52,
                                }}
                            />
                        </div>
                    </Header>
                    <Content
                        style={{
                            // margin: "24px 16px",
                            padding: 12,
                            minHeight: 280,
                            background: "#E2D2DA",
                            // borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );


};
export default DashboardLayout;
