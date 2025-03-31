import React from "react";
import AuthSectionHeading from "./AuthSectionHeading";

const AuthSection = ({ title, subTitle, children }) => {
  return (
    <div className="rounded-lg bg-white shadow-sm max-w-[500px] w-full py-[20px] px-[20px] sm:py-[15px] sm:px-[30px]  md:py-[20px] md:px-[40px]  lg:py-[40px] lg:px-[60px] my-[65px] relative mx-5 lg:mx-0 ">
      <AuthSectionHeading title={title} subTitle={subTitle} />

      {children}
    </div>
  );
};

export default AuthSection;
