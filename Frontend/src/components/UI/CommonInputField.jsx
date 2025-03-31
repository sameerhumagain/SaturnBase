import React from "react";

const CommonInputField = ({
  name,
  type,
  label,
  icon,
  isSuffixIcon = false,
  register,
  validation,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={`floating_${label}`}
        {...register(name, validation)}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 peer
            ${errors[name] ? "border-red-500" : "border-gray-300"}
          `}
        placeholder=" "
      />
      <label
        htmlFor={`floating_${label}`}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 start-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>

      {isSuffixIcon && (
        <img
          src={icon}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 max-w-[18px]"
        />
      )}

      {/* Show error message for the specific field */}
      {errors[name]?.message && (
        <p className="text-red-500 text-xs mt-1 ml-3">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CommonInputField;
