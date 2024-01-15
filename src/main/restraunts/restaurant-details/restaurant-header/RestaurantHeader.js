import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {restaurant.name}
          </h2>
          <p className="text-sm text-gray-500">
            {restaurant.cuisines.join(", ")}
          </p>
          <p className="text-sm text-gray-500">
            {restaurant.locality}, {restaurant.areaName}
          </p>
        </div>
        <div className="border-2 border-gray-300 rounded-lg">
          <div className="flex justify-center items-center mx-2 py-2">
            <FaStar className="text-green-700 mr-1" />
            {restaurant.avgRating}
          </div>
          <div className="text-center text-xs text-gray-800 font-semibold mx-2 py-2 border-t-2 border-t-gray-300">
            {restaurant.totalRatingsString}
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center my-5 text-gray-600">
        <IoMdBicycle className="mr-2" />
        {restaurant.sla.lastMileTravelString} |{" "}
        <MdCurrencyRupee className="ml-2" />
        {restaurant.feeDetails.fees[0].fee / 100} delivery fee will apply
      </div>
      <div className="w-full border-dashed border-b-2 border-gray-300"></div>
    </>
  );
};

export default RestaurantHeader;
