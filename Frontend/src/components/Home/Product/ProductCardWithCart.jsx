import React, { useState } from "react";
import hemp_prod_img from "../../../assets/Product/hemp_prd_img.png";
import product_img from "../../../assets/Product/hemp_bag.png";

import QuantityInput from "../../UI/QuantityInput";
import cart_icon from "../../../assets/Icons/Home/icon_cart.svg";
import heart_icon from "../../../assets/Icons/Home/heart_icon.svg";
import star from "../../../assets/Icons/Home/star.svg";
import quick_search_icon from "../../../assets/Icons/Home/quick_search.png";
import product_image from "../../../assets/Product/product_image.png";
import { useCartModal } from "../../../context/CartModalContext";
import {useNavigate} from "react-router-dom";

const ProductCardWithCart = ({ product }) => {
  const [quantity, setQuantity] = useState(6);
  const {openCart} = useCartModal();
  const navigate = useNavigate();

  return (
    <>
    <div
      className="group relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[310px] 
      min-h-[300px] sm:min-h-[390px] md:min-h-[420px] rounded border overflow-hidden bg-white shadow-lg 
      hover:shadow-xl transition-shadow duration-300"
      style={{ borderColor: "#E9E9E9" }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden max-h-[180px] sm:max-h-[200px] md:max-h-[260px]">
        <img
          src={product_image}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-50"
          alt="Product"
        />

        {/* Rating */}
        <div className="absolute bottom-2 left-2 flex items-center px-2 group-hover:opacity-0 transition-opacity duration-500">
          <img src={star} alt="star" />
          <span className="text-xs sm:text-sm font-medium text-white ml-1">
            (5.0)
          </span>
        </div>

        {/* Heart Icon (Add to Wishlist) */}
        <div className="absolute top-2 right-2">
          <button
            className="p-1 sm:p-2 border flex items-center justify-center rounded bg-gray-100 hover:bg-white w-[35px] sm:w-[45px] h-8 sm:h-10"
            style={{ borderColor: "#CE9560" }}
          >
            <img
              src={heart_icon}
              className="max-w-[18px] sm:max-w-[24px]"
              alt="heart"
            />
          </button>
        </div>

        {/* Quick View Button */}
        <div className="absolute bottom-0 w-full h-[30px] sm:h-[40px] bg-[#eaeaea] bg-opacity-90 flex gap-[8px] sm:gap-[10px] justify-center cursor-pointer items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-1 sm:p-2"
        onClick={() => navigate("product/product-url-slug/")}
        >
          <img
            src={quick_search_icon}
            className="h-[14px] sm:h-[18px] w-[14px] sm:w-[18px] opacity-30"
            alt="quick search"
          />
          <p
            className="text-[#777777] font-normal text-[12px] sm:text-[16px]"
            style={{ fontFamily: "'Radley', serif" }}
          >
            QUICK VIEW
          </p>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3 sm:p-4 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[8px] sm:text-[10px] text-red-700">
            BEST OF CREATION NEPAL
          </p>

          <p
            className="font-bold text-[16px] sm:text-[20px] md:text-[22px]"
            style={{ color: "#5F865C" }}
          >
            $120.25
          </p>
        </div>

        <h1
          className="font-semibold  text-[15px] md:text-[16px] mt-[6px] sm:mt-[10px] line-clamp-1"
          style={{ color: "#444444" }}
        >
          Buddha on bodhi leaves 4 fold lampshade
        </h1>

        {/* Actions Section */}
        <div className="flex mt-[15px] sm:mt-[20px] gap-[5px] md:gap-[10px] justify-center">
          <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          <button
            className="flex justify-center gap-[4px] sm:gap-[10px] flex-row p-2 border rounded bg-primary w-[140px] sm:w-[175px] h-[35px] sm:h-[40px] transition-colors duration-500 hover:bg-[#B98656]"
            style={{ borderColor: "#CE9560" }}
            onClick={openCart}
          >
            <img
              src={cart_icon}
              className="max-w-[18px] sm:max-w-[22px]"
              alt="cart"
            />
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-white">
              ADD TO CART
            </p>
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductCardWithCart;
