import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoMdBicycle } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

const RestaurantDetails = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState();
  console.log("RS details", restaurant);
  useEffect(() => {
    const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4698577&lng=78.3578246&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurant(data.data.cards[0].card.card.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="max-w-full mx-6 lg:max-w-6xl lg:mx-auto p-20">
      {restaurant && (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
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
              <div className="text-xs text-gray-800 font-semibold mx-2 py-2 border-t-2 border-t-gray-300">
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
      )}
    </div>
  );
};

export default RestaurantDetails;
