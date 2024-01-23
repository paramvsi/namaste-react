import React from "react";
import Restraunts from "../main/restraunts/Restraunts";
import { RESTAURANTS_WITH_OFFERS } from "../data/restauranst-with-offers";

const Offers = () => {
  return (
    <div className="w-full xl:w-[1200px] p-4 mx-auto">
      <h2 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3">
        Restaurants with great offers
      </h2>

      <Restraunts restaurants={RESTAURANTS_WITH_OFFERS} showOffers={true} />
    </div>
  );
};

export default Offers;
