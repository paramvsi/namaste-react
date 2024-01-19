import React, { useState } from "react";
import Categories from "./categories/Categories";
import Restraunts from "./restraunts/Restraunts";
import TopRestaurants from "./restraunts/TopRestaurants";
import Filter from "./filters/Filter";

const Main = () => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <section className="mx-3 lg:max-w-6xl lg:m-auto border-b-[1px] border-b-gray-200 py-4">
        <h3 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3">
          What's on your mind?
        </h3>
        <Categories />
      </section>
      <section className="mx-3 lg:max-w-6xl lg:m-auto border-b-[1px] border-b-gray-200 py-4">
        <h3 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3">
          Top restaurants near you
        </h3>
        <TopRestaurants />
      </section>

      <section className="mx-3 lg:max-w-6xl lg:m-auto border-b-[1px] border-b-gray-200 py-4">
        <h3 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3">
          Restaurants with online food delivery
        </h3>
        <Filter filterRestaurant={(f) => setFilter(f)} />
        <Restraunts filter={filter} />
      </section>
    </div>
  );
};

export default Main;
