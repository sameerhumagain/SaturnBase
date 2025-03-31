import React, { useState } from "react";
// import { Heart, ShoppingCart } from "lucide-react";
import Heart from "../../../assets/Icons/Home/Vector.png"
import AddCardButton from "../../Shared/AddCardButton";


const FeatureProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(6);
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <div className="flex flex-col rounded-lg border shadow-md font-openSans h-[412px] w-[310px]">
      <div className="relative bg-gradient-to-b from-[#E5E7E5] to-[#F5EADF] rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[241px] object-fit rounded-lg"
        />
        <div className="absolute bottom-2 left-2 flex items-center px-2 ">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-700 ml-1">
            ({product.rating}.0)
          </span>
        </div>
      </div>

      <div className=" flex justify-center  flex-col  items-center rounded-lg text-center pb-1">
        <h3 className="font-sans font-semibold text-gray-800 mt-[12px]" style={{fontSize:"14px"}}>{product.name}</h3>
        <div className="flex items-center justify-center mt-1">
          <span className="font-bold" style={{color:"#7D897C",fontSize:"18px"}}>
            ${product.price}
          </span>
          <span className="ml-2 text-[13px] text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        </div>

        <div className="flex items-center justify-center mt-2">
          <span className="mr-2 text-[13px]" style={{color:"#777777"}}>Qty:</span>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 flex text-gray-400 items-center justify-center border border-gray-300 rounded" style={{fontSize:"24px"}}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            className="w-8 h-8 mx-[5px]  text-center border border-gray-300 rounded text-[14px]"
            style={{color:"#CE9560"}}
            readOnly
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 flex text-gray-400 items-center justify-center border border-gray-300 rounded" style={{fontSize:"18px"}}
          >
            +
          </button>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setIsWishlist(!isWishlist)}
            className={`p-2 border rounded hover:bg-gray-50 w-10 h-10 ${
              isWishlist ? "text-red-500" : "text-gray-500"
            }`}
            style={{borderColor:"#CE9560"}}
          >
           <img src={Heart} alt="heart" style={{width:"20px"}}/>
          </button>

          <AddCardButton/>
          
        </div>
      </div>
    </div>
  );
};

export default FeatureProductCard;
