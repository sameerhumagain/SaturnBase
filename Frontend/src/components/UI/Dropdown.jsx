import React from "react";

const Dropdown = ({ name, label, options, value, onChange, error }) => {
  return (
    <div className="relative w-full mt-[-7px]">
      <label htmlFor={name} className="block text-sm text-gray-500 mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 peer
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1 ml-1.5">{error}</p>}
    </div>
  );
};

export default Dropdown;