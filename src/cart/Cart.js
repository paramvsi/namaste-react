// Cart.js
import React from "react";
import { useCart } from "./CardContext";
import FoodInfo from "../main/restraunts/restaurant-details/food-info/FoodInfo";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="w-full lg:w-96 m-auto my-2 py-3 lg:py-6 px-10 border-2  border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 mt-2">
        Cart
      </h2>
      <p className="text-md lg:text-xl text-gray-800 border-b-2 border-gray-400">
        Items in your cart{" "}
        <span className="font-semibold">{cartItems?.length}</span>
      </p>
      <ul>
        {cartItems.map((item, index) => (
          <FoodInfo key={index} info={item} remove={true} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
