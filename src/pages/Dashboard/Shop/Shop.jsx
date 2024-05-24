import { Card } from "antd";
import { BiLocationPlus } from "react-icons/bi";
import star from '../../../assets/Star.png'
import CustomDrawer from "../../../components/UI/CustomDrawer";
import { useState } from "react";

const Shop = () => {

    const shops = [
        {
            "id": 1,
            "name": "Turkish Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.5,
            "location": "Dhaka",
            "details": "Turkish Café is a cozy place where you can enjoy authentic Turkish coffee and delicious pastries. Whether you're looking for a place to relax or catch up with friends, Turkish Café has you covered.",
            "openingHours": [
                "Monday-Friday: 8:00 AM - 10:00 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: Closed"
            ],
            "contact": {
                "phone": "+880 123 456 789",
                "email": "turkishcafe@example.com"
            }
        },
        {
            "id": 2,
            "name": "Another Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.2,
            "location": "Dhaka",
            "details": "Another Café description goes here.",
            "openingHours": [
                "Monday-Friday: 7:00 AM - 9:00 PM",
                "Saturday: 8:00 AM - 10:00 PM",
                "Sunday: 10:00 AM - 6:00 PM"
            ],
            "contact": {
                "phone": "+880 987 654 321",
                "email": "anothercafe@example.com"
            }
        },
        {
            "id": 3,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 4,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 5,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 6,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 7,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 8,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 9,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        },
        {
            "id": 10,
            "name": "Third Café",
            "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            "rating": 4.0,
            "location": "Dhaka",
            "details": "Third Café description goes here.",
            "openingHours": [
                "Monday-Friday: 8:30 AM - 9:30 PM",
                "Saturday: 9:00 AM - 11:00 PM",
                "Sunday: 10:00 AM - 8:00 PM"
            ],
            "contact": {
                "phone": "+880 111 222 333",
                "email": "thirdcafe@example.com"
            }
        }
    ]


    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState();

    console.log(open)

    const handleOnCline = (data) => {
        setDrawerData(data)
        setOpen((prev) => !prev);
    }


    return (
        <div>

            <CustomDrawer open={open} setOpen={setOpen} data={drawerData}></CustomDrawer>

            <div className="flex flex-wrap justify-center gap-4">
                {shops.map((data) => (
                    <Card
                        key={data.id}
                        style={{ width: 300 }}
                        cover={<img alt={data.name} src={data.image} />}
                        actions={[
                            <button onClick={() => handleOnCline(data)} className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">
                                Details
                            </button>,
                        ]}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-[#454545] text-lg">{data.name}</h1>
                            <p className="flex items-center">
                                <span>
                                    <img src={star} alt="star" />
                                </span>
                                ({data.rating})
                            </p>
                        </div>
                        <p className="flex items-center">
                            <span>
                                <BiLocationPlus />
                            </span>
                            {data.location}
                        </p>
                        {/* <p className="text-[#454545] mt-4">{data.details}</p>
                        <div className="mt-4">
                            <h3 className="text-[#454545] text-sm">Opening Hours:</h3>
                            <ul className="list-disc pl-4">
                                {data.openingHours.map((hour, index) => (
                                    <li key={index}>{hour}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-[#454545] text-sm">Contact:</h3>
                            <p className="text-[#454545]">Phone: {data.contact.phone}</p>
                            <p className="text-[#454545]">Email: {data.contact.email}</p>
                        </div> */}
                    </Card>
                ))}
            </div>

            {/* <div className="flex flex-wrap gap-4">
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button onClick={() => handleOnCline(data)} className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>

                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">Details</button>
                    ]}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#454545] text-lg">Turkish Café</h1>
                        <p className="flex items-center"><span><img src={star}></img></span>(4.5)</p>
                    </div>
                    <p className="flex items-center"><span><BiLocationPlus /></span> Dhaka</p>
                </Card>
            </div> */}

        </div>
    );
};

export default Shop;