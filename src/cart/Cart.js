// Cart.js
import React from "react";
import { useCart } from "./CardContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}{" "}
            <button onClick={() => removeFromCart(item.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
