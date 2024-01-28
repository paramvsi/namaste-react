import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import RestaurantHeader from "./restaurant-header/RestaurantHeader";
import FoodCategory from "./food-category/FoodCategory";
import DetailsShimmer from "./DetailsShimmer";

const RestaurantDetails = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState();
  const [foodCategories, setFoodCategories] = useState();

  const [open, setOpen] = useState("Recommended");

  const handleOpen = (value) => setOpen(open === value ? "" : value);
  const location = useLocation();

  // Scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

        const card = data.data.cards.find((c) => !!c.groupedCard);
        const cards = card.groupedCard.cardGroupMap.REGULAR.cards;
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
    <div className="max-w-full mx-6 py-4 px-0 lg:max-w-6xl lg:mx-auto lg:p-20">
      {restaurant ? (
        <>
          <RestaurantHeader restaurant={restaurant} />
          {foodCategories.map((fc) =>
            fc.title ? (
              <FoodCategory
                key={fc.title}
                foodCategory={fc}
                open={open}
                handleOpen={handleOpen}
              />
            ) : (
              <></>
            )
          )}
        </>
      ) : (
        <DetailsShimmer />
      )}
    </div>
  );
};

export default RestaurantDetails;
