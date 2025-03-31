import React, { useState, useRef, useEffect } from "react";
import { useSidebar } from "../../../context/SidebarContext";
import forward_arr_icon from "../../../assets/Icons/Home/forward_arr.svg";
import arrow_down_icon from "../../../assets/Icons/Home/arrow_down.svg";
import { useNavigate } from "react-router-dom";

const SidebarCategory = ({
  category,
  isAdmin,
  openCategory,
  onCategoryClick,
  activeSubCategory,
  setActiveSubCategory,
}) => {
  const { isSideBarHidden } = useSidebar();
  const [dropDirection, setDropDirection] = useState("top-0");
  const [isHovered, setIsHovered] = useState(false);
  const subCategoryRef = useRef(null);
  const navigate = useNavigate();

  const isCategoryOpen = openCategory === category.id;

  const subCategory = category.sub_category;

  // Update drop direction based on available space
  useEffect(() => {
    if (subCategoryRef.current) {
      const categoryRect =
        subCategoryRef.current.parentElement.getBoundingClientRect();
      const dropdownHeight = subCategoryRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (categoryRect.top + dropdownHeight > windowHeight) {
        setDropDirection("bottom-0");
      } else {
        setDropDirection("top-0");
      }
    }
  }, [isCategoryOpen]);

  // Handle subcategory click
  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory.id); // Set clicked subcategory as active
    if (!isAdmin) {
      navigate(`/product-listing/${category.id}/`);
    } else {
      navigate(subCategory.route);
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border-b py-3.5 mb-1 ${
          !isSideBarHidden && "px-[10px] hover:bg-[#f1f1f1]"
        } relative rounded cursor-pointer ${
          isCategoryOpen || isHovered ? "bg-[#f1f1f1]" : ""
        }`}
        style={{ borderColor: "#F0F0F0" }}
        onClick={() => {
          onCategoryClick(category.id);
          !isAdmin
            ? navigate(`/category-product-listing/${category.id}/`)
            : navigate(`${category.route}`);
        }}
      >
        <div className="flex justify-between gap-5">
          <div className="flex gap-[12px] px-2 items-center cursor-pointer">
            <img src={category.icon} className="w-[22px]" alt={category.name} />
            <p
              className={`text-gray-700 text-[15px] group-hover:font-medium transition-all duration-500 ${
                isSideBarHidden && "hidden"
              }`}
            >
              {category.name}
            </p>
          </div>

          {isSideBarHidden && (
            <div className="absolute whitespace-nowrap left-full font-normal  rounded px-2 py-2 text-[#926A59] bg-[#FFFAF6] text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 before:content-[''] before:absolute before:top-1/2 ml-2 before:left-0 before:-translate-x-full before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-[#FFFAF6] z-50">
              {category.name}
            </div>
          )}

          {subCategory.length > 0 && (
            <img
              src={
                isCategoryOpen && subCategory.length > 0
                  ? arrow_down_icon
                  : forward_arr_icon
              }
              className={`max-w-[${isCategoryOpen ? "11px" : "7px"}] ${
                isSideBarHidden && "hidden"
              } mr-1`}
              alt="toggle"
            />
          )}
        </div>
      </div>

      {/* Subcategories: Show when category is open */}
      {isCategoryOpen && subCategory.length > 0 && !isSideBarHidden && (
        <div className="bg-[#f8f8f8] shadow-xs rounded-md mt-1 mb-1  ">
          {subCategory.map((sub, index) => (
            <div
              key={index}
              className={` py-3 px-4 hover:bg-[#f1f1f1] hover:border-gray-500 cursor-pointer pl-[50px] ${
                activeSubCategory === sub.id ? "bg-[#f1f1f1]" : ""
              }`}
              style={{ borderColor: "#F0F0F0" }}
              onClick={() => handleSubCategoryClick(sub)}
            >
              <p className="text-gray-700 text-[14px] font-medium ">
                {sub.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Subcategories: Show on hover when category is not clicked */}
      {!isCategoryOpen && !isSideBarHidden && (
        <div
          ref={subCategoryRef}
          className={`absolute left-full ml-3.5 ${dropDirection} max-w-36 w-full bg-[#f0f0f0] shadow-xs rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all`}
        >
          {subCategory.map((sub, index) => (
            <div
              key={index}
              className="border-b py-3 px-3 hover:bg-[#dfdfdf] border-gray-200 cursor-pointer"
            >
              <p className="text-gray-700 text-[14px] font-medium">
                {sub.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarCategory;
