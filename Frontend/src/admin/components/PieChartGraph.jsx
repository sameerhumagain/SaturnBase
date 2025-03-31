import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Smartphones", value: 32000, fill: "#3b82f6" },
  { name: "Laptops", value: 24000, fill: "#10b981" },
  { name: "Headphones", value: 15000, fill: "#f59e0b" },
  { name: "Tablets", value: 18000, fill: "#ef4444" },
  { name: "Smartwatches", value: 12000, fill: "#8b5cf6" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-gray-700">{`Units: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const PieChartGraph = () => {
  // Custom renderer for pie chart labels
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    // Increase radius to place labels further outside
    const radius = outerRadius * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="black" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5 border border-gray-100">
      {/* Header */}
      <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800">
            Best Selling Products
          </h3>
          <p className="text-md text-gray-500">Selected: Monthly</p>
        </div>
      
    
      <div className="flex justify-center mb-2">
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
      
 
      <div className="flex-grow" style={{height:"325px"}}> 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 10, left: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartGraph;