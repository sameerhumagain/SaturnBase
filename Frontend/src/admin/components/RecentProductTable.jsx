import React, { useState } from "react";
import Product from "../../assets/Product/prd1.jpg";

const RecentProductsTable = () => {
  const allProducts = [
    { id: 1, name: "Product A", image: Product, category: "Electronics", price: "$120", dateAdded: "2025-03-01", status: "Active" },
    { id: 2, name: "Product B", image: Product, category: "Clothing", price: "$180", dateAdded: "2025-03-02", status: "Inactive" },
    { id: 3, name: "Product C", image: Product, category: "Home Appliances", price: "$250", dateAdded: "2025-03-03", status: "Active" },
    { id: 4, name: "Product D", image: Product, category: "Furniture", price: "$300", dateAdded: "2025-03-04", status: "Inactive" },
    { id: 5, name: "Product E", image: Product, category: "Gaming", price: "$450", dateAdded: "2025-03-05", status: "Active" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Filter Products by Search Query
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
      {/* Header with Search Bar */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-xl">Recently Added Products</h3>
        <input
          type="text"
          placeholder="Search product..."
          className="px-3 py-2 w-64 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-max bg-white border-collapse">
          <thead>
            <tr className="border-b bg-gray-100 text-gray-700">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Date Added</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  {/* Product Image & Name */}
                  <td className="px-4 py-3 flex items-center space-x-3">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-md border border-gray-200" />
                    <span className="text-gray-800">{product.name}</span>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3 text-gray-700">{product.category}</td>

                  {/* Price */}
                  <td className="px-4 py-3 text-gray-800">{product.price}</td>

                  {/* Date Added */}
                  <td className="px-4 py-3 text-gray-600">{product.dateAdded}</td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-4">
          <button
            className={`px-3 py-1 border border-gray-300 rounded-l-md ${
              currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-3 py-1 border border-gray-300 ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-3 py-1 border border-gray-300 rounded-r-md ${
              currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProductsTable;
