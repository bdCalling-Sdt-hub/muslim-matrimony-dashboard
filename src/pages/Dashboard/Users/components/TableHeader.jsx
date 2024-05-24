/* eslint-disable react/prop-types */
const TableHeader = ({ title, icon, property1, property2, data1, data2 }) => {
  return (
    <div>
      <div className="flex justify-between py-4">
        <h1 className="text-blue500 text-[30px] font-medium">{title}</h1>

        <div className="flex gap-x-8">
          <div className="flex justify-between items-center bg-[#dcdcde] px-4 rounded-md">
            <img src={icon} alt="" />
            <p className="text-black500 font-semibold text-medium px-4">
              {property1}
            </p>
            <h1 className="text-blue500 text-[30px] font-medium">{data1}</h1>
          </div>

          {property2 ? (
            <div className="flex justify-between items-center bg-[#dcdcde] px-4 rounded-md">
              <img src={icon} alt="" />
              <p className="text-black500 font-semibold text-medium px-4">
                {property2}
              </p>
              <h1 className="text-blue500 text-[30px] font-medium">{data2}</h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
