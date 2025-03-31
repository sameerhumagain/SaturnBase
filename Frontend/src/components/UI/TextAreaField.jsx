import React from "react";

const TextAreaField = ({
  name,
  label,
  value = "",
  onChange,
  error,
  className = "",
  rows = 6,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        id={`floating_${name}`}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`
          block px-3 pb-2.5 pt-5 w-full text-sm text-gray-900 
          bg-transparent rounded-lg border 
          appearance-none focus:outline-none focus:ring-0 focus:border-gray-300
          peer resize-none
          ${error ? "border-red-500" : "border-gray-300"}
        `}
        placeholder=" "
      />
      <label
        htmlFor={`floating_${name}`}
        className={`
          absolute text-sm text-gray-500 
          duration-300 transform 
          -translate-y-3 scale-75 top-2 z-10 origin-[0] 
          bg-white px-2 left-2
          peer-focus:text-gray-600
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:top-5
          peer-focus:top-2 
          peer-focus:scale-75 
          peer-focus:-translate-y-3
          ${value ? "text-gray-600 -translate-y-3 scale-75 top-2" : ""}
          pointer-events-none
        `}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1 ml-1.5">{error}</p>}
    </div>
  );
};

export default TextAreaField;