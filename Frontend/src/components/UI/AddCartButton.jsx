import React from "react";
import cart_icon from "../../assets/Icons/Home/cart_icon.svg";

const AddCartButton = () => {
  return (
    <>
      <button
        className="flex flex-row space-x-5 ml-2 p-2 border rounded hover:bg-gray-50 w-[190px] h-[40px]"
        style={{ borderColor: "#CE9560" }}
      >
        <img
          src={cart_icon}
          className="ml-2 max-w-[24px]"
          alt="cart"
        />
        <p className="text-[16px]" style={{ color: "#CE9560" }}>
         
          ADD TO CART
        </p>
      </button>
    </>
  );
};

export default AddCartButton;
