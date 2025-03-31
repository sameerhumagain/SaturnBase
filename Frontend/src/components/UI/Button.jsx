import React from "react";

const Button = ({
  label,
  variant = "primary",
  loading = false,
  onClickFunc,
  className = "",
  children, // Allows for icons or additional elements
}) => {
  const baseClasses =
    "p-2.5 px-5 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border";

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primaryHover disabled:bg-primary-light transition-colors duration-300",
    outline:
      "border-white text-white bg-transparent hover:bg-white hover:text-gray-800 transition-colors duration-300",
  };

  return (
    <button
      onClick={onClickFunc}
      disabled={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children ? children : label}
    </button>
  );
};

export default Button;
