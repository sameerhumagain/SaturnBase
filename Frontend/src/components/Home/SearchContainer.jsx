import React, { useState, useRef, useEffect } from "react";
import search1 from "../../assets/Icons/Home/search1.png";
import recent_search_icon from "../../assets/Icons/Home/recent_icon.svg";
import cross_icon from "../../assets/Icons/Home/cross_icon.svg";
import product_img from "../../assets/Product/hemp_bag.png";

const SearchContainer = ({ setSearchBarClicked, selectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const recent_search_data = [
    { name: "Hemp & nettle products" },
    { name: "Felted woolen products" },
    { name: "Knitting yarn - hemp & more" },
  ];

  const product_data = [
    {
      id: 1,
      image: product_img,
      name: "Hemp and Nettle Bag",
      category: "Hemp & Nettle Products",
    },
    {
      id: 2,
      image: product_img,
      name: "Eco-friendly Hemp Wallet",
      category: "Hemp Accessories",
    },
    {
      id: 3,
      image: product_img,
      name: "Handwoven Hemp Backpack",
      category: "Hemp Bags",
    },
    {
      id: 4,
      image: product_img,
      name: "Natural Fiber Hat",
      category: "Eco-friendly Clothing",
    },
    {
      id: 5,
      image: product_img,
      name: "Handmade Wool Scarf",
      category: "Woolen Products",
    },
  ];

  // Filter products based on search query
  const filteredProducts = product_data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 px-5 sm:px-[20px] sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:max-w-[840px] sm:h-auto sm:rounded-[18px] overflow-hidden">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-[840px] bg-white mt-2 border-b border-[#CFCFCF] px-[10px]">
        <img src={search1} className="w-5" alt="Search" />
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 bg-transparent px-3 outline-none placeholder-[#926A59] placeholder:text-[16px] placeholder:font-normal py-[12px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={searchInputRef} // Assign ref to input
        />
        <img
          src={cross_icon}
          className="w-3.5 sm:hidden"
          alt="Remove"
          onClick={() => setSearchBarClicked(false)}
        />
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto h-screen sm:max-h-[500px] px-[10px] py-[20px]">
        {selectedCategory && (
          <div className="mb-5 px-3 py-2 bg-[#F9F9F9] rounded-lg shadow-sm text-[#444444] text-[16px] font-medium border border-[#E0E0E0]">
            <span className="text-[#926A59] text-[14px]">
              Selected Category:
            </span>
            <p className="mt-1 text-[16px]">{selectedCategory}</p>
          </div>
        )}

        {searchQuery.length === 0 && (
          <div>
            <h4 className="text-[17px] md:text-[18px] font-normal mb-[15px] text-[#563B30]">
              Recent Searches
            </h4>
            {recent_search_data.map((data, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-between mb-[15px] cursor-pointer"
              >
                <div className="flex flex-1 items-start gap-[12px]">
                  <img
                    src={recent_search_icon}
                    className="max-w-5"
                    alt="Recent"
                  />
                  <span className="font-normal text-[15px] md:text-[16px] text-[#444444]">
                    {data.name}
                  </span>
                </div>
                <img src={cross_icon} className="w-3" alt="Remove" />
              </div>
            ))}
          </div>
        )}

        {/* Search Results */}
        {searchQuery.length > 0 && (
          <div>
            <h4 className="text-[17px] md:text-[18px] font-normal mb-[15px] text-[#563B30]">
              Search Results
            </h4>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-3 items-center mb-4 cursor-pointer"
                >
                  <img
                    src={product.image}
                    className="max-w-10 aspect-square h-auto rounded object-cover"
                    alt={product.name}
                  />
                  <div>
                    <p className="text-[16px] font-medium text-[#444444]">
                      {product.name}
                    </p>
                    <p className="text-[14px] text-[#926A59]">
                      {product.category}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[#926A59] text-[16px]">No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
