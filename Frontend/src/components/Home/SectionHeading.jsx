import React from "react";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <>
      <div className="text-center my-section flex flex-col justify-center items-center ">
        <h2 className="text-[19px] sm:text-lg font-semibold text-[#374151] uppercase md:text-[26px] xl:text-[28px]">{heading}</h2>
        <div className="bg-gray-700 max-w-[60px] md:max-w-[88px] w-full h-[3px] font-normal rounded mt-[8px]"></div>
        <div className="max-w-[718px]">
          <p
            className="mt-[25px] text-wrap font-normal text-[16px]"
            style={{ color: "#777777"}}
          >
            {subHeading}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionHeading;
