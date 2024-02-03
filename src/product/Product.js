import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Restraunts from "../main/restraunts/Restraunts";
import { CATEGORIES_DATA } from "../data/categories";

const Product = () => {
  // Fetch product details based on productId
  const params = useParams();
  const [subTitle, setSubTitle] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();

  // Scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const item = CATEGORIES_DATA.find((cat) => cat.name === params.id);

    setSubTitle(item.data.subTitle);
    setRestaurants(item.data.restaurants);
  }, [params.id]);

  return (
    <div>
      <section className="mx-3 lg:max-w-6xl lg:m-auto border-b-[1px] border-b-gray-200 py-4">
        <h2 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3">
          {params?.id}
        </h2>

        <p className="text-gray-700 text-sm lg:text-lg font-thin my-3">
          {subTitle}
        </p>

        <Restraunts restaurants={restaurants} />
      </section>
    </div>
  );
};

export default Product;
