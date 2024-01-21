import React from "react";

const Filter = ({ filterRestaurant }) => {
  const filters = [
    "All",
    "Fast Delivery",
    "Rating 4.0+",
    "Pure Veg",
    "Less than Rs.300",
    "Rs.300 - Rs.600",
  ];

  return (
    <div className="hidden lg:flex items-center justify-start gap-4">
      {filters.map((filter) => (
        <button
          onClick={() => filterRestaurant(filter)}
          className="text-sm py-3 px-4 rounded-3xl bg-gray-200 hover:bg-gray-300 hover:border-[1px] hover:border-gray-900"
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
