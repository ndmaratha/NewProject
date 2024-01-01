import React from "react";

const ShimmerSection = () => {
  return (
    <div className="animate-pulse bg-gray-300 p-4 border border-gray-300 rounded-md">
      <div className="bg-gray-400 h-40 w-full object-cover rounded-md mb-4"></div>
      <div className="bg-gray-400 h-6 w-4/5 mb-2 rounded-md"></div>
      <div className="bg-gray-400 h-4 w-full mb-2 rounded-md"></div>
      <div className="flex items-center mb-2">
        <div className="bg-gray-400 h-4 w-4 rounded-full"></div>
        <div className="ml-2 bg-gray-400 h-4 w-12 rounded-md"></div>
      </div>
      <div className="bg-gray-400 h-6 w-1/3 rounded-md"></div>
    </div>
  );
};

const Shimmer = () => {
  const shimmerProductIds = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-4 gap-4">
      {shimmerProductIds.map((productId) => (
        <ShimmerSection key={productId} />
      ))}
    </div>
  );
};

export default Shimmer;
