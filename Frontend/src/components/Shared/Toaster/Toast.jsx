import React from "react";

// A simple Toast component to display messages
const Toast = ({ message, type }) => {
  const toastStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div
      className={`fixed top-4 right-4 max-w-xs w-full p-4 rounded-md shadow-lg ${toastStyles[type]} flex items-center gap-2`}
    >
      {type === "success" ? (
        <span className="font-bold">✔</span>
      ) : (
        <span className="font-bold">❌</span>
      )}
      <span>{message}</span>
    </div>
  );
};

export default Toast;
