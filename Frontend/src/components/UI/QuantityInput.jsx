import React, { useState } from "react";
import plus_icon from "../../assets/Icons/Home/plus.png";
import minus_icon from "../../assets/Icons/Home/minus.png";

const QuantityInput = ({ height = "40px", showQtyLabel = true ,quantity, setQuantity}) => {
  

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setQuantity(Math.max(0, value));
  };

  return (
    <div className={`relative flex items-center h-[35px] sm:h-[${height}]`}>
      {showQtyLabel && (
        <span className="absolute -top-2 left-2 text-primary text-[10px] sm:text-[12px] bg-white px-1">
          Qty:
        </span>
      )}

      <div
        className="flex justify-between items-center border border-primary px-2 py-[7px] sm:px-2 sm:py-[10px] h-full"
        style={{ borderRadius: "4px" }}
      >
        <button
          onClick={decrementQuantity}
          className="text-primary text-[14px] sm:text-[16px] font-normal hover:text-orange-300 focus:outline-none"
          aria-label="Decrease quantity"
        >
          <svg
            width="14"
            height="3"
            viewBox="0 0 14 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 2.5H0V0.5H14V2.5Z" fill="#CE9560" />
          </svg>
        </button>
        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          className="w-[24px] sm:w-[30px] md:w-[35px] text-center focus:outline-none text-primary text-[16px] sm:text-[17px] font-semibold flex-grow-0"
          aria-label="Quantity"
        />
        <button
          onClick={incrementQuantity}
          className="text-primary text-[14px] sm:text-[16px] font-normal hover:text-orange-300 focus:outline-none"
          aria-label="Increase quantity"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#CE9560" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
