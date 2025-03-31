import React, { useEffect, useState } from "react";
import { useAlert } from "../../context/AlertMesssageContext";


const AlertMessage = ({ type, message }) => {
  let textColor = "";
  let borderColor = "";
  let backgroundColor = "";

  // Set the alert styles based on the alert type
  switch (type) {
    case "success":
      textColor = "text-green-500";
      borderColor = "border-green-100";
      backgroundColor = "bg-green-50";
      break;
    case "error":
      textColor = "text-red-500";
      borderColor = "border-red-50";
      backgroundColor = "bg-red-50";
      break;
    case "info":
      textColor = "text-blue-500";
      borderColor = "border-blue-100";
      backgroundColor = "bg-blue-50";
      break;
    case "warning":
      textColor = "text-yellow-500";
      borderColor = "border-yellow-100";
      backgroundColor = "bg-yellow-50";
      break;
    default:
      textColor = "text-gray-500";
      borderColor = "border-gray-100";
      backgroundColor = "bg-gray-50";
  }


  return (
    <div
      className={`w-full max-w-md p-2 rounded-lg border ${borderColor} ${backgroundColor} shadow-sm flex items-center space-x-4 mb-6 mt-2`}
    >
      <div className="flex-grow">
        <p className={`font-normal text-[15px] ${textColor}`}>{message}</p>
      </div>
    </div>
  );
};

export default AlertMessage;
