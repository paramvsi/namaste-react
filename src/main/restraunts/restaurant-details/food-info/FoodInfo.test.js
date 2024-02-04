import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "../../../../cart/CardContext";
import FoodInfo from "./FoodInfo";
import "@testing-library/jest-dom";

const mockInfo = {
  id: "1",
  name: "Test Food",
  price: 500,
  defaultPrice: 500,
  // Add other properties as needed
};

const addToCartMock = jest.fn();
const removeCartMock = jest.fn();

// Mock the addToCart function
jest.mock("../../../../cart/CardContext", () => ({
  ...jest.requireActual("../../../../cart/CardContext"),
  useCart: () => ({
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    cartItems: [],
  }),
}));

describe("FoodInfo Component", () => {
  it("renders FoodInfo component with correct elements", () => {
    render(
      <CartProvider>
        <FoodInfo info={mockInfo} />
      </CartProvider>
    );

    // Check if the food name is rendered
    expect(screen.getByText("Test Food")).toBeInTheDocument();

    // Check if the price is rendered
    expect(screen.getByText("5")).toBeInTheDocument(); // Assuming price is in paise

    // Check if the ADD button is rendered
    expect(screen.getByText("ADD")).toBeInTheDocument();
  });

  it("handles adding to cart when ADD button is clicked", () => {
    render(
      <CartProvider>
        <FoodInfo info={mockInfo} />
      </CartProvider>
    );

    // Click the ADD button
    fireEvent.click(screen.getByText("ADD"));
  });

  it("handles removing from cart when REMOVE button is clicked", () => {
    render(
      <CartProvider>
        <FoodInfo info={mockInfo} remove />
      </CartProvider>
    );

    // Click the REMOVE button
    fireEvent.click(screen.getByText("REMOVE"));
  });

  // Add more test cases as needed
});
