import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "./restaurant-header/RestaurantHeader";

const RestaurantDetails = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState();
  const [foodCategories, setFoodCategories] = useState();

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

        const groupedCardMap = data.data.cards[2].groupedCard;
        const cards = groupedCardMap.cardGroupMap.REGULAR.cards;
        const foodCats = [];
        cards.forEach((c) => {
          if (c && c.card) {
            foodCats.push(c.card.card);
          }
        });
        setFoodCategories(foodCats);
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
          <RestaurantHeader restaurant={restaurant} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
