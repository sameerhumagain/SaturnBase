import React from "react";
import product_img from "../../../assets/Product/hemp_bag.png";

const ExploreCategoryCard = ({
  imageSrc,
  title,
  description,
  buttonText = "Shop Now", 
  cardWidth = "max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[310px]" ,
  onClick
}) => {
  return (
    <div
      className={`${cardWidth} group h-auto w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center relative overflow-hidden`}
    >
      {/* Image Section */}
      <div className="relative w-full max-h-[180px] sm:max-h-[200px] md:max-h-[240px] lg:max-h-[272px] overflow-hidden rounded-t-md">
        <img
          src={product_img}
          alt={title}
          className="object-cover w-full transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay with Text */}
        <div className="absolute top-0 left-0 right-0 bottom-0 px-[15px] sm:px-[16px] flex flex-col justify-center items-center bg-black bg-opacity-45 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
          <p className="text-white text-[12px] sm:text-[14px] text-center leading-tight">
            {description}
          </p>
          <button className="bg-primary text-white w-full py-[5px] sm:py-[7px] text-[14px] sm:text-[16px] rounded max-w-[150px] sm:max-w-[180px] md:max-w-[202px] uppercase mt-[10px] sm:mt-[15px] md:mt-[25px]"
          onClick={()=>onClick()}>
            {buttonText}
          </button>
        </div>
      </div>

      {/* Title and Subtitle */}
      <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold my-[12px] sm:my-[15px] md:my-[20px] text-[#444444] text-center line-clamp-1 px-[2px] md:px-1.5">
        {title}
      </h2>

    </div>
  );
};

export default ExploreCategoryCard;
