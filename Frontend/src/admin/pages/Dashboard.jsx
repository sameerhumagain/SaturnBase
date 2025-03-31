import React, { useState, useEffect } from "react";

import MetricCard from "../components/MetricCard";
import {
  FaShoppingCart,
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaPencilAlt,
  FaEye,
} from "react-icons/fa";
import LineGraph from "../components/LineGraph";
import PieChartGraph from "../components/PieChartGraph";
import Product from "../../assets/Product/prd1.png";
import SearchAnalytics from "../components/SearchAnalytics";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Orders",
      value: "687.3k",
      icon: <FaShoppingCart size={20} />,
      change: "+4.5%",
      isPositive: true,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      hasProgress: false,
    },
    {
      title: "Total Revenue",
      value: "$5.42M",
      icon: <FaDollarSign size={20} />,
      change: "+2.8%",
      isPositive: true,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      hasProgress: false,
    },
    {
      title: "New Users",
      value: "45.3k",
      icon: <FaUsers size={20} />,
      change: "-1.2%",
      isPositive: false,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      hasProgress: false,
    },

    {
      title: "Active Users",
      value: "1.23M",
      icon: <FaChartLine size={20} />,
      change: "-0.8%",
      isPositive: false,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      hasProgress: false,
    },
  ];

  const [salesData, setSalesData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Daily");

  const [recentProducts, setRecentProducts] = useState([]);

  const [recentOrders, setRecentOrders] = useState([]);

  const fetchSalesData = () => {
    const sampleData = [
      { date: "2025-03-01", sales: 1200 },
      { date: "2025-03-02", sales: 1400 },
      { date: "2025-03-03", sales: 1100 },
      { date: "2025-03-04", sales: 1600 },
    ];
    setSalesData(sampleData);
  };

  const fetchRecentProducts = () => {
    const products = [
      {
        id: 1,
        name: "Product A",
        image: Product,
        category: "Electronics",
        price: "$120",
        dateAdded: "2025-03-01",
        status: "Active",
      },
      {
        id: 2,
        name: "Product B",
        image: Product,
        category: "Clothing",
        price: "$180",
        dateAdded: "2025-03-02",
        status: "Inactive",
      },
      {
        id: 3,
        name: "Product C",
        image: Product,
        category: "Home Appliances",
        price: "$250",
        dateAdded: "2025-03-03",
        status: "Active",
      },
      {
        id: 4,
        name: "Product D",
        image: Product,
        category: "Furniture",
        price: "$300",
        dateAdded: "2025-03-04",
        status: "Inactive",
      },
    ];
    setRecentProducts(products);
  };

  const fetchRecentOrders = () => {
    const orders = [
      {
        id: 1001,
        customer: "John Doe",
        total: "$250",
        date: "2025-03-05",
        status: "Completed",
      },
      {
        id: 1002,
        customer: "Jane Smith",
        total: "$180",
        date: "2025-03-04",
        status: "Pending",
      },
      {
        id: 1003,
        customer: "Michael Lee",
        total: "$75",
        date: "2025-03-03",
        status: "Completed",
      },
      {
        id: 1004,
        customer: "Emma Brown",
        total: "$400",
        date: "2025-03-02",
        status: "Cancelled",
      },
      {
        id: 1005,
        customer: "David Wilson",
        total: "$99",
        date: "2025-03-01",
        status: "Completed",
      },
    ];
    setRecentOrders(orders);
  };

  useEffect(() => {
    fetchSalesData();
    fetchRecentProducts();
    fetchRecentOrders();
  }, []);
  return (
    <div className="flex-1 bg-gray-100 px-6 py-8">
      {" "}
      <h1 className="font-semibold text-2xl">Admin Dashboard</h1>
      <p className="font-normal">Welcome to the admin panel!</p>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {" "}
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-6">
        <div className="flex-1 min-w-[300px] bg-white rounded-xl p-6 border border-gray-100 relative">
          <h3 className="font-semibold text-xl mb-4">Top 5 Recent Orders</h3>

          {/* View More Button */}
          <button
            className="absolute top-6 right-6 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
            onClick={() => alert("View More Clicked!")} // Handle the "View More" action
          >
            View More
          </button>

          <table className="w-full border-collapse mt-5">
            <thead>
              <tr className="border-b ">
                <th className="px-4 py-2 text-left font-semibold">Order ID</th>
                <th className="px-4 py-2 text-left font-semibold">Customer</th>
                <th className="px-4 py-2 text-left font-semibold">Total</th>
                <th className="px-4 py-2 text-left font-semibold">Date</th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length > 0 ? (
                recentOrders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800">#{order.id}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-gray-800">{order.total}</td>
                    <td className="px-4 py-3 text-gray-600">{order.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No recent orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex-1 min-w-[300px] bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-semibold text-xl mb-4">
            Recently Added Products
          </h3>

          {/* Table for Recently Added Products */}
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-semibold">Product</th>
                <th className="px-4 py-2 text-left font-semibold">Category</th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
                <th className="px-4 py-2 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentProducts.length > 0 ? (
                recentProducts.slice(0, 5).map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md border border-gray-200"
                      />
                      <span>{product.name}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {product.category}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full inline-block ${
                          product.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditProduct(product.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-2"
                        >
                          <FaPencilAlt className="h-4 w-4" />
                        </button>

                        <button
                          onClick={() => handleViewProduct(product.id)}
                          className="text-gray-600 hover:text-gray-800 text-sm flex items-center space-x-2"
                        >
                          <FaEye className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-6">
        <div className="flex-1 min-w-[300px] h-full">
          <LineGraph salesData={salesData} selectedPeriod={selectedPeriod} />
        </div>

        <div className="flex-1 min-w-[300px] h-full">
          <PieChartGraph />
        </div>
      </div>
      <div className="mt-8">
        <SearchAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;
