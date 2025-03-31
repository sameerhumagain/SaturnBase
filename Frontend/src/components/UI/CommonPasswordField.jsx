import React, { useState } from "react";
import show_password_icon from "../../assets/Icons/Home/show_password_icon.svg";
import hide_password_icon from "../../assets/Icons/Home/hide_password_icon.svg";


const CommonPasswordField = ({name,  label, register, validation, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        id={`floating_${label}`}
        {...register(name, validation)}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 peer
          
        `}
        placeholder=" "
      />
      <label
        htmlFor={`floating_${label}`}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 start-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>

      
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
      >
        <img src={showPassword ? show_password_icon : hide_password_icon } className=""></img>
      </button>

    
      {/* {errors.name?.message && <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>}÷ */}
    </div>
  );
};

export default CommonPasswordField;
