import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const LineGraph = () => {
  const [selectedRange, setSelectedRange] = useState("Monthly");
  const [selectedFilterType, setSelectedFilterType] = useState(null);
  const [dates, setDates] = useState([null, null]); // [startDate, endDate]

  const salesData = {
    Daily: [
      { day: "Mon", sales: 1200 },
      { day: "Tue", sales: 1500 },
      { day: "Wed", sales: 1100 },
      { day: "Thu", sales: 1700 },
      { day: "Fri", sales: 1600 },
      { day: "Sat", sales: 1800 },
      { day: "Sun", sales: 1900 },
    ],
    Weekly: [
      { week: "Week 1", sales: 12000 },
      { week: "Week 2", sales: 15000 },
      { week: "Week 3", sales: 17000 },
      { week: "Week 4", sales: 14000 },
    ],
    Monthly: [
      { month: "Jan", sales: 28500 },
      { month: "Feb", sales: 32400 },
      { month: "Mar", sales: 30200 },
      { month: "Apr", sales: 34100 },
      { month: "May", sales: 36800 },
      { month: "Jun", sales: 35200 },
      { month: "Jul", sales: 38400 },
      { month: "Aug", sales: 39600 },
      { month: "Sep", sales: 37800 },
      { month: "Oct", sales: 42400 },
      { month: "Nov", sales: 45600 },
      { month: "Dec", sales: 43500 },
    ],
    Yearly: [
      { year: "2020", sales: 400000 },
      { year: "2021", sales: 450000 },
      { year: "2022", sales: 480000 },
      { year: "2023", sales: 500000 },
    ],
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const filteredData = () => {
    if (selectedFilterType === "Date Range" && dates[0] && dates[1]) {
      return salesData[selectedRange]; 
    }

    return salesData[selectedRange];
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800">
            Sales Summary
          </h3>
          <p className="text-md text-gray-500">Selected: {selectedRange}</p>
        </div>

        {/* Filter Dropdown and Date Picker */}
        <div className="flex items-center space-x-4">
          <Select
            options={[
              { value: null, label: "No Filter" },
              { value: "Date Range", label: "Date Range" },
              { value: "Specific Month", label: "Specific Month" },
              { value: "Year Range", label: "Year Range" },
            ]}
            onChange={(option) => setSelectedFilterType(option.value)}
            value={{
              value: selectedFilterType,
              label: selectedFilterType || "No Filter",
            }}
            className="react-select-container"
            styles={{
              control: (styles) => ({
                ...styles,
                borderColor: "#e5e7eb",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#3b82f6",
                },
              }),
              option: (styles, { isSelected }) => ({
                ...styles,
                backgroundColor: isSelected ? "#3b82f6" : "#ffffff",
                color: isSelected ? "#ffffff" : "#000000",
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                },
              }),
            }}
          />

          {/* Date Picker for Range Selection */}
          {selectedFilterType === "Date Range" && (
            <DatePicker
              selected={dates[0]}
              onChange={(update) => setDates(update)}
              startDate={dates[0]}
              endDate={dates[1]}
              selectsRange
              dateFormat="MM/dd/yyyy"
              placeholderText="Select Date Range"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}
        </div>
      </div>

      {/* Line Graph */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={filteredData()}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey={
                selectedRange === "Yearly"
                  ? "year"
                  : selectedRange === "Monthly"
                  ? "month"
                  : selectedRange === "Weekly"
                  ? "week"
                  : "day"
              }
              axisLine={false}
              tickLine={false}
              stroke="#9ca3af"
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              stroke="#9ca3af"
              domain={["dataMin - 3000", "dataMax + 3000"]}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              formatter={(value) => [formatCurrency(value), "Sales"]}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              }}
              labelStyle={{ color: "#4b5563", fontSize: 12 }}
              itemStyle={{ color: "#4b5563", fontSize: 12 }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ stroke: "#3b82f6", strokeWidth: 2, r: 4, fill: "#fff" }}
              activeDot={{
                r: 6,
                stroke: "#3b82f6",
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
