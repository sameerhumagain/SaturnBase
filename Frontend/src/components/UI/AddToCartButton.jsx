import React from "react";
import cart_icon from "../../assets/Icons/Home/icon_cart.svg";

const AddToCartButton = ({ maxWidth = "175px", height = "40px", onClick, text = "ADD TO CART", icon }) => {
  return (
    <button
      className={`flex justify-center items-center gap-[10px] flex-row p-2 border rounded bg-primary transition-colors duration-500 hover:bg-[#B98656]`}
      style={{
        maxWidth,
        height,
        width:"100%",
        borderColor: "#CE9560",
      }}
      onClick={onClick}
    >
     <img src={cart_icon}/>
      <p className="text-[14px] md:text-[16px] text-white">{text}</p>
    </button>
  );
};

export default AddToCartButton;
