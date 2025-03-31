import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = ({
  columns,
  rows,
  selectedItems,
  handleSelectAll,
  handleSelectItem,
  handleDeleteItem,
  handleEditItem,
  handleCategoryClick,
  handleProductClick, 
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-left">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  checked={
                    selectedItems.length === rows.length && rows.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </div>
            </th>
            {columns.map((column) => (
              <th
                key={column.name}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                    checked={selectedItems.includes(row.id)}
                    onChange={() => handleSelectItem(row.id)}
                  />
                </div>
              </td>
              {columns.map((column) => (
                <td
                  key={column.name}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {column.name === "user" ? (
                    // Wrap user name in Link for navigation
                    <div
                      className="cursor-pointer hover:underline"
                      onClick={() => handleEditItem(row.id)} 
                    >
                      {row.first_name} {row.last_name}
                    </div>
                  ) : column.name === "name" ? (
                    // Render product name as clickable
                    <div
                      className="cursor-pointer hover:underline"
                      onClick={() => handleProductClick(row.id)} // Handle product name click
                    >
                      {row[column.name]}
                    </div>
                  ) : column.name === "category_name" ? (
                    // Render category name as clickable
                    <div
                      className="cursor-pointer hover:underline"
                      onClick={() => handleCategoryClick(row.id)} // Handle category name click
                    >
                      {row.category_name ? row.category_name : "No category"}
                    </div>
                  ) : column.render ? (
                    // Render custom content if provided
                    column.render(row)
                  ) : (
                    row[column.name]
                  )}
                </td>
              ))}

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex ml-5">
                  <button
                    onClick={() => handleDeleteItem(row.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
