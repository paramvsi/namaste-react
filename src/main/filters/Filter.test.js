import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";
import "@testing-library/jest-dom";

describe("Filter Component", () => {
  it("renders Filter component with correct elements", () => {
    render(<Filter filterRestaurant={() => {}} />);

    // Check if each filter button is rendered
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Fast Delivery")).toBeInTheDocument();
    expect(screen.getByText("Rating 4.0+")).toBeInTheDocument();
    expect(screen.getByText("Pure Veg")).toBeInTheDocument();
    expect(screen.getByText("Less than Rs.300")).toBeInTheDocument();
    expect(screen.getByText("Rs.300 - Rs.600")).toBeInTheDocument();
  });

  it("calls filterRestaurant prop on button click", () => {
    const filterRestaurantMock = jest.fn();
    render(<Filter filterRestaurant={filterRestaurantMock} />);

    // Click on the "Fast Delivery" button
    fireEvent.click(screen.getByText("Fast Delivery"));

    // Check if the filterRestaurant prop is called with the correct argument
    expect(filterRestaurantMock).toHaveBeenCalledWith("Fast Delivery");
  });
});
