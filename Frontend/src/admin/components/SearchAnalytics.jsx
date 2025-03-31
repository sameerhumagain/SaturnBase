import React from "react";

const SearchAnalytics = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
       <h3 className="text-2xl font-semibold text-gray-800">Search Analytics Overview</h3>
       <p className="text-md text-gray-500 mt-1 mb-5">
        Monitor popular and recent search activities
      </p>

      <div className="flex space-x-8">
        <div className="w-1/2">
          <h3 className="text-xl font-semibold mb-4">Top 5 Searches</h3>
          <div className="space-y-2">
            {[
              "iPhone i5 Pro Max",
              "MacBook Air M3",
              "AirPods Pro",
              "iPad Pro",
              "Apple Watch Ultra",
            ].map((search, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                {/* Search text and count */}
                <span className="text-gray-700 flex-1">{search}</span>
                <span className="text-gray-500 ml-2">
                  {[2847, 2156, 1883, 1452, 968][index]}
                </span>
                {/* Progress bar */}
                <div className="w-1/3 bg-gray-200 rounded-full h-1.5 ml-4">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{
                      width: `${
                        ([2847, 2156, 1883, 1452, 968][index] / 3000) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-xl font-semibold mb-4">Recent Searches</h3>
          <div className="space-y-2">
            {[
              'MacBook Pro 16"',
              "iPhone i5 Pro Case",
              "Apple Vision Pro",
              "AirPods Max",
              "iPad Mini",
            ].map((search, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-700">{search}</span>
                <span className="text-gray-500">
                  {
                    [
                      "2 minutes ago",
                      "5 minutes ago",
                      "12 minutes ago",
                      "18 minutes ago",
                      "25 minutes ago",
                    ][index]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAnalytics;
