import React from "react";
import phone_icn from "../../assets/Icons/Home/phone.svg";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary py-2 ">
      <div className="xl:relative flex flex-wrap justify-center sm:justify-between items-center w-full px-1 sm:px-10 h-auto gap-1">
        {/* Announcement */}
        <p className="text-[10px] md:text-sm font-normal text-center text-white flex-1 sm:w-auto w-full px-2">
          Welcome to Creation Nepal! Enjoy exclusive discounts on selected items -
          <span className="pl-2 underline cursor-pointer font-normal">
            shop now
          </span>
        </p>

        {/* Contact Info */}
        <div className="xl:absolute xl:right-10 flex flex-wrap justify-center sm:justify-end items-center gap-[15px] w-full sm:w-auto mt-[2px] sm:mt-0">
          {/* Phone Number */}
          <div className="flex items-center gap-[4px]">
            <img src={phone_icn} alt="Phone Icon" className="w-3" />
            <span className="text-[10px] md:text-sm text-white">+977 15255262</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-[4px]">
            <GrLocation className="text-white text-[14px]" />
            <span className="text-[10px] md:text-sm text-white">Kathmandu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
