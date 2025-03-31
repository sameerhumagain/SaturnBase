import React from "react";

const AuthSectionHeading = ({ title, subTitle }) => {
  return (
    <>
      <header className="flex flex-col items-center pb-2">
        <h1
          id="login-title"
          className="text-[22px] font-semibold text-[#444444] mt-1 text-center"
        >
          {title}
        </h1>
        <p
          className="text-[#444444] text-center mt-[5px] text-[14px]"
          style={{ lineHeight: "23px" }}
        >
          {subTitle}
        </p>
      </header>
    </>
  );
};

export default AuthSectionHeading;
