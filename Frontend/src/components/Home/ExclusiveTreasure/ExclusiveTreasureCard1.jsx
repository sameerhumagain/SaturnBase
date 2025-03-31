import React from "react";
import hemp_prod_img from "../../../assets/Product/hemp_prd_img.png";
import AddCardButton from "../../Shared/AddCardButton";
import QuantityInput from "../../Shared/QuantityInput";
import Cart from "../../../assets/Icons/Home/icon_cart.png";
import Heart from "../../../assets/Icons/Home/Vector.png";
import star from "../../../assets/Icons/Home/star.svg";
import quick_search_icon from "../../../assets/Icons/Home/quick_search.png";

const ExclusiveTreasureCard1 = () => {
  return (
    <>
      <div
        className="group relative w-full sm:w-[310px] min-h-[430px] rounded border overflow-hidden"
        style={{ borderColor: "#E9E9E9" }}
      >
        <div className="relative overflow-hidden h-[272px]">
          <img
            src={hemp_prod_img}
            className="w-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-50"
          />

          <div className="absolute bottom-2 left-2 flex items-center px-2 group-hover:opacity-0 transition-opacity duration-500">
            <img src={star} alt="star" />
            <span className="text-sm text-white ml-1">(5.0)</span>
          </div>

          <div className="absolute top-2 right-2">
            <button
              className={`p-2 border flex items-center justify-center rounded bg-gray-100 hover:bg-white w-[45px] h-10`}
              style={{ borderColor: "#CE9560" }}
            >
              <img
                src={Heart}
                alt="heart"
                style={{ width: "21px", height: "19px" }}
              />
            </button>
          </div>

          <div className="absolute bottom-0 w-full h-[40px] bg-[#eaeaea] bg-opacity-90 flex gap-[10px] justify-center cursor-pointer items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-2">
            <img
              src={quick_search_icon}
              className="h-[18px] w-[18px] opacity-30"
              alt="quick search"
            />
            <p
              className="text-[#777777] font-normal text-[16px]"
              style={{ fontFamily: "'Radley', serif" }}
            >
              QUICK VIEW
            </p>
          </div>
        </div>

        <div className="p-[15px] py-3">
          <div className="flex justify-between items-center">
            <p className="font-normal text-[10px] text-red-700">
              BEST OF CREATION NEPAL
            </p>

            <p className="font-bold text-[20px]" style={{ color: "#5F865C" }}>
              $120.25
            </p>
          </div>

          <p
            className="font-medium text-sm mt-[10px] line-clamp-1"
            style={{ color: "#444444" }}
          >
            Buddha on bodhi leaves 4 fold lampshade
          </p>

          <div className="flex mt-[25px] gap-[10px]">
            <QuantityInput />
            <button
              className="flex justify-center gap-[10px] flex-row p-2 border rounded bg-primary w-[175px] h-[40px] transition-colors duration-500 hover:bg-[#B98656]"
              style={{ borderColor: "#CE9560" }}
            >
              <img
                src={Cart}
                className=""
                alt="cart"
                style={{ width: "24px", height: "24px" }}
              />
              <p className="text-[16px] text-white">ADD TO CART</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveTreasureCard1;
