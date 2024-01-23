import React, { useEffect, useState } from "react";
import Block from "../../components/block/Block";
import { RESTAURANTS } from "../../data/restaurants";
import { Link } from "react-router-dom";

const Restraunts = ({ restaurants, filter, showOffers }) => {
  const [restraunts, setRestraunts] = useState([]);
  const [filterRestaurant, setFilterRestaurants] = useState([]);

  useEffect(() => {
    setRestraunts(
      restaurants && restaurants.length > 0 ? restaurants : RESTAURANTS
    );

    setFilterRestaurants(
      restaurants && restaurants.length > 0 ? restaurants : RESTAURANTS
    );
  }, [restaurants]);

  useEffect(() => {
    if (!restraunts || filter === "") {
      return;
    }

    switch (filter) {
      case "All": {
        setFilterRestaurants(restraunts);
        break;
      }
      case "Fast Delivery": {
        const res = restraunts.sort(
          (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
        );

        setFilterRestaurants(res);
        break;
      }
      case "Rating 4.0+": {
        const res = restraunts.filter((f) => f.info.avgRating >= 4);
        setFilterRestaurants(res);
        break;
      }
      case "Pure Veg": {
        const res = restraunts.filter((f) => !!f.info.veg);
        setFilterRestaurants(res);
        break;
      }

      case "Less than Rs.300": {
        const res = restraunts.filter(
          (f) => parseInt(f.info.costForTwo.split(" ")[0].substring(1)) < 300
        );
        setFilterRestaurants(res);
        break;
      }
      case "Rs.300 - Rs.600": {
        const res = restraunts.filter(
          (f) =>
            parseInt(f.info.costForTwo.split(" ")[0].substring(1)) >= 300 &&
            parseInt(f.info.costForTwo.split(" ")[0].substring(1)) <= 600
        );
        setFilterRestaurants(res);
        break;
      }
      default: {
        setFilterRestaurants(restraunts);
      }
    }
  }, [restraunts, filter]);

  const mapCuisines = (restaurant) => {
    const cuisines = restaurant.info.cuisines.join(", ");

    return cuisines.length > 40 ? cuisines.substring(0, 40) + "..." : cuisines;
  };

  return (
    <div className="flex flex-wrap justify-start ">
      {filterRestaurant.map((restaurant) => (
        <Link
          key={restaurant.info.name}
          to={`/restaurant/${restaurant.info.id}`}
          className="cursor-pointer"
        >
          <Block
            key={restaurant.info.name}
            name={restaurant.info.name}
            imgId={restaurant.info.cloudinaryImageId}
            location={restaurant.info.areaName}
            rating={restaurant.info.avgRating}
            cuisines={mapCuisines(restaurant)}
            time={restaurant.info.sla.deliveryTime}
            discount={restaurant.info.aggregatedDiscountInfoV3}
            showOffers={showOffers}
          />
        </Link>
      ))}
    </div>
  );
};

export default Restraunts;
