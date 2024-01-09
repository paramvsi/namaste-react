import React, { useEffect, useState } from "react";
import Block from "../../components/block/Block";
import { RESTAURANTS } from "../../data/restaurants";

const TopRestaurants = () => {
  const [restraunts, setRestraunts] = useState([]);

  useEffect(() => {
    setRestraunts(RESTAURANTS.slice(6, 13));
  }, []);

  const mapCuisines = (restaurant) => {
    const cuisines = restaurant.info.cuisines.join(", ");

    return cuisines.length > 40 ? cuisines.substring(0, 40) + "..." : cuisines;
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
      {restraunts.map((restaurant) => (
        <Block
          key={restaurant.info.name}
          name={restaurant.info.name}
          imgId={restaurant.info.cloudinaryImageId}
          location={restaurant.info.areaName}
          rating={restaurant.info.avgRating}
          cuisines={mapCuisines(restaurant)}
          time={restaurant.info.sla.deliveryTime}
        />
      ))}
    </div>
  );
};

export default TopRestaurants;
