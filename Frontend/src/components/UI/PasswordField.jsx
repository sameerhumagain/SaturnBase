import React, { useState } from "react";
import show_password_icon from "../../assets/Icons/Home/show_password_icon.svg";
import hide_password_icon from "../../assets/Icons/Home/hide_password_icon.svg";

const PasswordField = ({ name, label, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          id={`floating_${name}`}
          name={name}
          value={value}
          onChange={onChange}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 peer
          ${error ? "border-red-500" : "border-gray-300"}
        `}
          placeholder=" "
        />
        <label
          htmlFor={`floating_${name}`}
          className="absolute text-[15px] text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 start-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {label}
        </label>

        {/* Password toggle icon */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        >
          <img src={showPassword ? show_password_icon : hide_password_icon} alt="toggle password visibility" />
        </button>
      </div>

      {/* Show error message */}
      {error && <p className="text-red-500 text-xs mt-1 ml-1.5">{error}</p>}
    </div>
  );
};

export default PasswordField;
