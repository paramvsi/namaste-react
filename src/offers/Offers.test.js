import React from "react";
import { render, screen } from "@testing-library/react";
import Offers from "./Offers";
import { RESTAURANTS_WITH_OFFERS } from "../data/restauranst-with-offers";
import "@testing-library/jest-dom";

jest.mock("../main/restraunts/Restraunts", () => ({
  __esModule: true,
  default: jest.fn(() => (
    <div data-testid="mocked-restaurants">Mocked Restaurants Component</div>
  )),
}));

describe("Offers Component", () => {
  it("renders Offers component with correct elements", () => {
    render(<Offers />);

    // Check if the heading "Restaurants with great offers" is rendered
    expect(
      screen.getByText("Restaurants with great offers")
    ).toBeInTheDocument();

    // Check if the mocked Restaurants component is rendered
    expect(screen.getByTestId("mocked-restaurants")).toBeInTheDocument();
  });

  it("calls Restraunts component with correct props", () => {
    render(<Offers />);

    // Check if the Restraunts component is called with the correct props
    expect(
      require("../main/restraunts/Restraunts").default
    ).toHaveBeenCalledWith({
      restaurants: RESTAURANTS_WITH_OFFERS,
      showOffers: true,
    });
  });
});
