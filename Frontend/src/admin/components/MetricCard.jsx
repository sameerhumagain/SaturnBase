import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const MetricCard = ({
  title,
  value,
  icon,
  change,
  isPositive, 
  bgColor,
  textColor,
  hasProgress,
  progressValue,
  progressColor,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-between items-center group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex items-center gap-4 z-10">
        <div
          className={`p-3 ${bgColor} ${textColor} rounded-full group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div className={hasProgress ? "w-full" : ""}>
          <h3 className="text-gray-700 font-semibold text-sm mb-1 group-hover:text-black transition-colors duration-300">
            {title}
          </h3>
          <div className="text-lg font-bold group-hover:scale-105 origin-left transition-transform duration-300">
            {value}
          </div>

          {hasProgress ? (
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden">
              <div
                className={`${progressColor} h-1.5 rounded-full transition-all duration-500 ease-out group-hover:animate-pulse`}
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
          ) : (
            <div className="text-gray-400 text-xs group-hover:text-gray-600 transition-colors duration-300">
              Since last month
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex items-center ${
          isPositive ? "text-green-500" : "text-red-500"
        } text-sm font-semibold z-10 group-hover:scale-110 transition-transform duration-300`}
      >
        {isPositive ? <FaArrowUp size={14} /> : <FaArrowDown size={14} />}
        <span className="ml-1">{change.replace("+", "").replace("-", "")}</span>
      </div>
    </div>
  );
};


export default MetricCard;
                                                             