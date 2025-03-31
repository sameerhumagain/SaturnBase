import React, { useState, useEffect } from "react";
import { useSidebar } from "../../../context/SidebarContext";
import sidebar_menu from "../../../assets/Icons/Home/sidebar_menu.svg";
import {
  sidebarProductCategory,
  adminSidebarList,
} from "../../../constants/Data";
import SidebarCategory from "./SidebarCategory";
import search_icon from "../../../assets/Icons/Home/search1.png";

const Sidebar = ({ sideBarHeading, isAdmin = false }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isSideBarHidden, handleSidebarMinimize } = useSidebar();
  const [openCategory, setOpenCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setOpenCategory((prev) => {
      if (prev === categoryId) {
        setActiveSubCategory(null);
        return null;
      }

      if (window.innerWidth < 1024) {
        handleSidebarMinimize();
      }
      return categoryId;
    });
  };

  useEffect(() => {
    const searchBar = document.getElementById("search-container");
    if (!searchBar) return;

    const initialOffsetTop = searchBar.offsetTop;

    const handleScroll = () => {
      setIsSearchVisible(window.scrollY >= initialOffsetTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`py-2 pt-2 border-r  bg-white  top-[105px] sm:top-[85px] md:top-[100px] lg:top-[108px] ${
        isSideBarHidden ? "w-[55px]" : "w-[310px] sm:w-[330px]"
      } sticky h-[calc(100vh-110px)]`}
      style={{ borderColor: "#F0F0F0" }}
    >
      <div
        className={`flex items-center gap-5 mb-[10px] shadow-sm py-[10px] 
      ${
        isSideBarHidden
          ? "justify-center"
          : "justify-between pl-[30px] pr-[20px]"
      }`}
      >
        {!isSideBarHidden && (
          <p className="font-semibold text-lg capitalize text-[#926A59]">
            {sideBarHeading}
          </p>
        )}

        <img
          src={sidebar_menu}
          className="max-w-[22px] cursor-pointer py-2 rotate-180"
          onClick={handleSidebarMinimize}
          alt="Toggle Sidebar"
        />
      </div>

      {/* Side bar content */}

      {/* Show Search Bar on Scroll for smaller screen  */}
      {isSearchVisible && !isAdmin && (
        <div
          className={`${
            isSideBarHidden ? "hidden" : "flex"
          } block md:hidden items-center w-full max-w-[260px] px-3 mx-auto mb-5 bg-tertiary shadow-sm rounded-full`}
        >
          <img src={search_icon} className="max-w-[18px] ml-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 bg-transparent px-3 outline-none text-secondary placeholder-secondary/90 placeholder:text-[15px] h-full py-[10px]"
          />
        </div>
      )}

      {/* Scrollable Category List */}
      <div
        className={` no-scrollbar overflow-y-auto pb-32 ${
          isSideBarHidden
            ? "px-[0px] flex justify-start flex-col items-center "
            : "px-[15px]"
        } h-[calc(100vh-160px)] justify-start`}
      >
        {!isAdmin
          ? sidebarProductCategory.map((category, index) => (
              <SidebarCategory
                key={index}
                category={category}
                isAdmin={isAdmin}
                openCategory={openCategory}
                onCategoryClick={handleCategoryClick}
                activeSubCategory={activeSubCategory}
                setActiveSubCategory={setActiveSubCategory}
              />
            ))
          : adminSidebarList.map((category, index) => (
              <SidebarCategory
                key={index}
                category={category}
                isAdmin={isAdmin}
                openCategory={openCategory}
                onCategoryClick={handleCategoryClick}
                activeSubCategory={activeSubCategory}
                setActiveSubCategory={setActiveSubCategory}
              />
            ))}
      </div>
    </aside>
  );
};

export default Sidebar;
