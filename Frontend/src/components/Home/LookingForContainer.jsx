import React, { useState } from "react";
import ProductCategory from "./ProductCategory";
import jewelry from "../../assets/Icons/Home/jewelry.png";
import leaf from "../../assets/Icons/Home/leaf.svg";
import handicrafts from "../../assets/Icons/Home/handicrafts.svg";
import ritual from "../../assets/Icons/Home/incense-ritual.svg";
import sidebar_menu from "../../assets/Icons/Home/sidebar_menu.svg";
import fashion from "../../assets/Icons/Home/fashion-design.svg";
import search1 from "../../assets/Icons/Home/search1.png";
import cross_icon from "../../assets/Icons/Home/cross_icon.svg"; // Cross icon to clear category
import SearchContainer from "./SearchContainer";

const LookingForContainer = () => {
  const [searchBarClicked, setSearchBarClicked] = useState(false);
  const [categoryOptionClicked, setCategoryOptionClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleBackground = () => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";
  };

  const handleSearchBarClick = () => {
    setSearchBarClicked(true);
    handleBackground();
  };

  const handleCategoryOptionClick = () => {
    setCategoryOptionClicked(!categoryOptionClicked); // Toggle category dropdown
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set selected category
    setCategoryOptionClicked(false); // Close the dropdown
  };

  const clearCategory = () => {
    setSelectedCategory(""); 
  };

  const closeModal = () => {
    searchBarClicked ? setSearchBarClicked(false) : setCategoryOptionClicked(false);
    const scrollY = Math.abs(parseInt(document.body.style.top || "0"));
    document.body.style.position = "static";
    document.body.style.top = "0";
    window.scrollTo(0, scrollY);
  };

  const category_data = [
    { name: "All Categories" },
    { name: "Hemp & nettle products" },
    { name: "Felted woolen products" },
    { name: "Knitting yarn - hemp & more" },
    { name: "Handicrafts" },
    { name: "Jewelry" },
    { name: "Fashion" },
  ];

  return (
    <>
      {(searchBarClicked || categoryOptionClicked) && (
        <div className="fixed inset-0 z-50 bg-black opacity-40" onClick={closeModal}></div>
      )}

      <section className="justify-center flex flex-col items-center w-full mt-section px-horizontalSpacing">
        <h1 className="text-[35px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-extrabold text-primary">
          Looking For ?
        </h1>

        <div className="flex mt-[30px] w-full justify-center">
          <div className="flex items-center gap-10 px-2 overflow-hidden overflow-x-auto whitespace-nowrap no-scrollbar">
            <ProductCategory image={jewelry} name={"Jewelry"} />
            <ProductCategory image={leaf} name={"Hemp and Nettle"} />
            <ProductCategory image={handicrafts} name={"Handicrafts"} />
            <ProductCategory image={ritual} name={"Rituals Items"} />
            <ProductCategory image={fashion} name={"Fashion"} />
          </div>
        </div>

        <div className={`relative flex items-center max-w-[840px] w-full rounded-[84px] py-[12px] mt-[25px] ${!searchBarClicked && "border border-[#CFCFCF]"}`}>
          <img src={search1} className="max-w-[17px] ml-5" alt="Search" />

          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 bg-transparent w-full px-3 outline-none placeholder-[#926A59] placeholder:text-[14px] md:placeholder:text-[17px] placeholder:font-normal"
            readOnly // Prevent manual typing
            onClick={handleSearchBarClick}
          />

          {selectedCategory ? (
            <div className="flex items-center gap-2 px-3 bg-[#F0F0F0] rounded-full mr-2 py-[3px]">
              <span className="text-sm text-[#444444]">{selectedCategory}</span>
              <img
                src={cross_icon}
                className="w-2.5 h-2.5 cursor-pointer"
                alt="Clear"
                onClick={clearCategory}
              />
            </div>
          ) : (
            <img
              src={sidebar_menu}
              className="max-w-[18px] md:max-w-[20px] mr-5 cursor-pointer rotate-180"
              onClick={handleCategoryOptionClick}
              alt="Category Menu"
            />
          )}

          {searchBarClicked && (
            <SearchContainer handleSearchBarClick={handleSearchBarClick} setSearchBarClicked={setSearchBarClicked} selectedCategory={selectedCategory} />
          )}

          {categoryOptionClicked && (
            <div className="absolute top-12 right-3 w-full max-w-[220px] sm:max-w-[300px] z-50 bg-white max-h-[400px] py-[10px] px-[10px] lg:px-[15px] overflow-y-auto no-scrollbar pb-8" style={{ borderRadius: "4px" }}>
              {category_data.map((category, index) => (
                <div
                  key={index}
                  className="border-b pl-[15px] py-[9px] rounded hover:bg-[#f7f7f7] cursor-pointer font-normal hover:font-medium mt-[4px]"
                  style={{ borderColor: "#F0F0F0" }}
                  onClick={() => handleCategorySelect(category.name)}ß
                >
                  <p className="text-[#444444] text-[15px] md:text-[15px] lg:text-[16px]">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <span id="search-container"></span>
      </section>
    </>
  );
};

export default LookingForContainer;
