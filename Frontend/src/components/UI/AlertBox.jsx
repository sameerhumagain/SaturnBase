import { FaCheck, FaTimes, FaExclamationCircle } from "react-icons/fa";

const AlertBox = ({ children, type = "success", onClose }) => {
  const alertClasses = {
    success: "bg-green-50 border-green-200 text-green-700",
    error: "bg-red-50 border-red-200 text-red-700",
  };

  const icon = type === "success" ? (
    <FaCheck className="h-5 w-5 text-green-600" />
  ) : (
    <FaExclamationCircle className="h-5 w-5 text-red-600" />
  );

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-md border ${alertClasses[type]} flex items-center gap-3 shadow-lg transition-all duration-300`}
      style={{
        minWidth: "300px",
        animation: "fadeIn 0.5s",
      }}
    >
      {icon}
      <div className="text-sm">{children}</div>
      <button
        onClick={onClose}
        className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <FaTimes size={16} />
      </button>
    </div>
  );
};


