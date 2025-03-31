import React from "react";
import { useNavigate } from "react-router-dom";
import product_img from "../../../assets/Product/hemp_bag.png";

const CategoryListingCard = ({
  id,
  imageSrc,
  title,
  description,
  cardWidth = "max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[310px]",
  onClick,
  maxChars = 150,
}) => {
  const navigate = useNavigate();
  const isLongDescription = description.length > maxChars;

  const handleReadMore = (e) => {
    e.stopPropagation();
    navigate(`/category/${id || "details"}`);
  };

  // Show truncated content plus the "Read More" link for long descriptions
  const displayDescription = isLongDescription
    ? `${description.substring(0, maxChars)}...`
    : description;

  return (
    <div
      className={`${cardWidth} group h-auto w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-stretch relative overflow-hidden`}
    >
      {/* Image Section */}
      <div className="relative w-full pt-[75%] overflow-hidden rounded-t-md">
        <img
          src={imageSrc || product_img}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 pb-4.5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-gray-800 text-base text-start sm:text-lg font-semibold mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Description - increased to 4 lines */}
        <div className="paragraph-text leading-normal ">
          <p className="mb-1 text-start line-clamp-5">{displayDescription} </p>
          {isLongDescription && (
          <span
            className="text-primary text-end font-medium cursor-pointer leading-tight text-sm hover:underline inline-block"
            onClick={onClick}
          >
            Read More
          </span>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default CategoryListingCard;
