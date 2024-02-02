import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./Main";
import "@testing-library/jest-dom";
import { CartProvider } from "../cart/CardContext";
import { BrowserRouter } from "react-router-dom";

describe("Main Component", () => {
  it("renders Main component with correct elements", () => {
    render(
      <CartProvider>
        {" "}
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </CartProvider>
    );

    // Check if the heading "What's on your mind?" is rendered
    expect(screen.getByText("What's on your mind?")).toBeInTheDocument();

    // Check if the heading "Top restaurants near you" is rendered
    expect(screen.getByText("Top restaurants near you")).toBeInTheDocument();

    // Check if the heading "Restaurants with online food delivery" is rendered
    expect(
      screen.getByText("Restaurants with online food delivery")
    ).toBeInTheDocument();
  });

  it("calls filterRestaurant prop when using the Filter component", () => {
    render(
      <CartProvider>
        {" "}
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Fast Delivery"));
  });
});
