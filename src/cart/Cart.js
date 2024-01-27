// Cart.js
import React from "react";
import { useCart } from "./CardContext";
import FoodInfo from "../main/restraunts/restaurant-details/food-info/FoodInfo";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="w-full lg:w-3/5 m-auto my-2 py-3 lg:py-6 px-10 border-2  border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 mt-2">
        Cart
      </h2>
      <p className="text-md lg:text-xl text-gray-800 border-b-2 border-gray-400">
        Items in your cart{" "}
        <span className="font-semibold mx-2 text-red-600">
          {cartItems?.length}
        </span>
      </p>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <FoodInfo key={index} info={item} remove={true} />
          ))
        ) : (
          <div className="text-md font-semibold m-8">
            No Items Found.{" "}
            <Link className="text-red-600 cursor-pointer" to={"/"}>
              Add items?
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Cart;
