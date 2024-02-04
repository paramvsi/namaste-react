import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FoodCategory from "./FoodCategory";
import "@testing-library/jest-dom";

jest.mock("../../../../cart/CardContext", () => ({
  ...jest.requireActual("../../../../cart/CardContext"),
  useCart: () => ({
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    cartItems: [],
  }),
}));

const mockFoodCategory = {
  title: "Test Category",
  itemCards: [
    { card: { info: { id: "1", name: "Test Food 1", price: 500 } } },
    { card: { info: { id: "2", name: "Test Food 2", price: 700 } } },
  ],
  categories: [
    {
      title: "Subcategory 1",
      itemCards: [
        { card: { info: { id: "3", name: "Test Food 3", price: 600 } } },
        { card: { info: { id: "4", name: "Test Food 4", price: 800 } } },
      ],
    },
  ],
};

describe("FoodCategory Component", () => {
  it("renders FoodCategory component with correct elements", () => {
    render(
      <FoodCategory
        foodCategory={mockFoodCategory}
        open="Test Category"
        handleOpen={() => {}}
      />
    );

    // Check if the category title is rendered
    expect(screen.getByText("Test Category (2)")).toBeInTheDocument();

    // Check if the food items are rendered
    expect(screen.getByText("Test Food 1")).toBeInTheDocument();
    expect(screen.getByText("Test Food 2")).toBeInTheDocument();
  });

  it("handles opening/closing accordion when category title is clicked", () => {
    const handleOpenMock = jest.fn();

    render(
      <FoodCategory
        foodCategory={mockFoodCategory}
        open="Test Category"
        handleOpen={handleOpenMock}
      />
    );

    // Click the category title
    fireEvent.click(screen.getByText("Test Category (2)"));

    // Check if the handleOpen function is called with the correct category title
    expect(handleOpenMock).toHaveBeenCalledWith("Test Category");
  });

  it("renders FoodCategory component with correct elements", () => {
    mockFoodCategory.itemCards = null;
    render(
      <FoodCategory
        foodCategory={mockFoodCategory}
        open="Test Category"
        handleOpen={() => {}}
      />
    );

    // Check if the category title is rendered
    expect(screen.getByText("Subcategory 1")).toBeInTheDocument();

    // Check if the food items are rendered
    expect(screen.getByText("Test Food 3")).toBeInTheDocument();
    expect(screen.getByText("Test Food 4")).toBeInTheDocument();
  });
});
