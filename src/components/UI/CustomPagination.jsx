/* eslint-disable no-unused-vars */

import { ConfigProvider, Pagination } from "antd";
import { paginationThemes } from "../../themes";
import { useState } from "react";


const CustomPagination = (total,

    size,
    handleOnChange) => {
    const [current, setCurrent] = useState(3);
    return (
        <div>
            <ConfigProvider theme={paginationThemes}>
                <Pagination
                    current={current} onChange={handleOnChange} total={50}

                />
            </ConfigProvider>
        </div>
    );
};

export default CustomPagination;