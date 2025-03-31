import React, { useState } from "react";

const InputField = ({
  name,
  type = "text",
  label,
  icon,
  isSuffixIcon = false,
  value,
  onChange,
  error,
  isOptional = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isLabelOptional = isOptional && !value && !isFocused;

  return (
    <div>
      <div className="relative w-full">
        <input
          type={type}
          id={`floating_${name}`}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-[15px] text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 peer
          ${error ? "border-red-500" : "border-gray-300"}
        `}
          placeholder=" "
        />
        <label
          htmlFor={`floating_${name}`}
          className="absolute text-[15px] text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 start-1
          peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {isLabelOptional ? (
            <span className="peer-placeholder-shown:inline peer-focus:hidden">
              {label} (Optional)
            </span>
          ) : (
            label
          )}
        </label>

        {isSuffixIcon && icon && (
          <img
            src={icon}
            alt=""
            className="absolute right-3 top-1/2 transform -translate-y-1/2 max-w-[18px]"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-1.5">{error}</p>}
    </div>
  );
};

export default InputField;
