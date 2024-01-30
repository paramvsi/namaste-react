import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "./CardContext"; // Replace with your actual file path

// Mock child component to test context functionality
const MockChildComponent = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <div data-testid="cart-items">{JSON.stringify(cartItems)}</div>
      <button
        data-testid="add-to-cart"
        onClick={() => addToCart({ id: 1, name: "Product 1" })}
      >
        Add to Cart
      </button>
      <button data-testid="remove-from-cart" onClick={() => removeFromCart(1)}>
        Remove from Cart
      </button>
    </div>
  );
};

describe("CartProvider and useCart", () => {
  it("should provide cartItems, addToCart, and removeFromCart", () => {
    const { getByTestId } = render(
      <CartProvider>
        <MockChildComponent />
      </CartProvider>
    );

    // Check if cartItems are initially empty
    const cartItemsElement = getByTestId("cart-items");
    expect(cartItemsElement.textContent).toBe("[]");

    // Add an item to the cart
    fireEvent.click(getByTestId("add-to-cart"));

    // Check if cartItems are updated after adding to the cart
    expect(cartItemsElement.textContent).toBe('[{"id":1,"name":"Product 1"}]');

    // Remove the item from the cart
    fireEvent.click(getByTestId("remove-from-cart"));

    // Check if cartItems are updated after removing from the cart
    expect(cartItemsElement.textContent).toBe("[]");
  });
});
