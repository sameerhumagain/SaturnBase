import React from "react";
import testimonial_icon from "../../../assets/Icons/Home/testimonials.svg";

const TestimonialCard = ({ name, address, message }) => {
  
  
  return (
    <div className="relative  max-w-[349px]  min-h-[310px] lg:min-h-[350px]  border flex flex-col items-center p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="mt-10 font-bold text-[#444444]">{name}</h3>
      <h6 className="mt-1 text-sm font-normal text-[#7A7A7A]">- {address}</h6>
      <p className="mt-4 text-base italic font-normal text-center text-[#7A7A7A]">
        {message}
      </p>
      <div className="absolute top-3 left-3 max-w-7">
        <img src={testimonial_icon} alt="Testimonial Icon" />
      </div>
    </div>
  );
};

export default TestimonialCard;
