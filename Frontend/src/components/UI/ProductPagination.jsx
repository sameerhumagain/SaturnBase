import React from "react";
import { Link } from "react-router-dom";

const ProductPagination = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center border-t border-gray-200">
      {/* Entries Info */}
      <div className="text-sm text-secondary mb-2">
        Showing <span className="font-semibold">1</span> to{" "}
        <span className="font-semibold">10</span> of{" "}
        <span className="font-semibold">100</span> entries
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-0">
        {/* Previous Button */}
        <button className="px-4 py-2 text-sm font-medium text-secondary bg-tertiary border border-gray-300 rounded-l-md hover:bg-primary hover:text-white transition">
          Previous
        </button>

        {/* Page Numbers */}
        {[1, 2, 3].map((page, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium border transition ${
              page === 1
                ? "bg-primary text-tertiary border-primary"
                : "bg-tertiary text-secondary border-gray-300 hover:bg-primary hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button className="px-4 py-2 text-sm font-medium text-secondary bg-tertiary border border-gray-300 rounded-r-md hover:bg-primary hover:text-white transition">
          Next
        </button>
      </div>

     
    </div>
  );
};

export default ProductPagination;
