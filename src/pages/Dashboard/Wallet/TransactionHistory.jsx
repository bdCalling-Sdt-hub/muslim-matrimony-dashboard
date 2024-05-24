import { Table } from "antd";


const TransactionHistory = () => {

    const columns = [
        {
            title: '#Trx ID',
            dataIndex: 'sl',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
        },
    ];
    const data = [
        {
            key: '1',
            sl: '01',
            userName: 'Benjamin Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Weekly',
        },
        {
            key: '2',
            sl: '02',
            userName: 'Benjamin Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '3',
            sl: '03',
            userName: 'Benjamin Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Weekly',
        },
        {
            key: '4',
            sl: '04',
            userName: 'Benjamin Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '5',
            sl: '05',
            userName: 'Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '6',
            sl: '06',
            userName: 'Benjamin Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '7',
            sl: '07',
            userName: 'Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '8',
            sl: '08',
            userName: 'Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '9',
            sl: '09',
            userName: 'Benjamin Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
        {
            key: '10',
            sl: '10',
            userName: 'Price',
            date: 'Mar 5,2025',
            payment: '$ 12,000',
            packages: 'Monthly',
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className="mr-4">
            <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
                <p className="text-2xl font-medium leading-relaxed text-center my-4">Transaction Activities</p>


                <Table columns={columns} dataSource={data} onChange={onChange} />

            </div>
        </div>
    );
};

export default TransactionHistory;