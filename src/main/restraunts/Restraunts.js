import React, { useEffect, useState } from "react";
import Block from "../../components/block/Block";

const Restraunts = () => {
  const [restraunts, setRestraunts] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRestraunts(
          data.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
        );

        console.log(restraunts);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-between items-center">
      {restraunts.map((restaurant) => (
        <Block
          key={restaurant.info.name}
          name={restaurant.info.name}
          imgId={restaurant.info.cloudinaryImageId}
          location={restaurant.info.areaName}
          rating={restaurant.info.avgRating}
          cuisines={restaurant.info.cuisines}
          time={restaurant.info.sla.deliveryTime}
        />
      ))}
    </div>
  );
};

export default Restraunts;
