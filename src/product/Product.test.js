import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { CATEGORIES_DATA } from "../data/categories";
import "@testing-library/jest-dom";
import { useLocation, useParams } from "react-router-dom";

jest.mock("../main/restraunts/Restraunts", () => ({
  __esModule: true,
  default: jest.fn(({ restaurants }) => (
    <div data-testid="mocked-restaurants">
      Mocked Restraunts Component: {JSON.stringify(restaurants)}
    </div>
  )),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Use the actual module for all non-mocked parts
  useLocation: jest.fn(),
  useParams: jest.fn(),
}));

describe("Product Component", () => {
  beforeEach(() => {
    // Mock the useLocation hook
    useLocation.mockReturnValue({ pathname: `/product/Biryani` });

    // Mock the useParams hook
    useParams.mockReturnValue({ id: "Biryani" });
  });

  it("renders Product component with correct elements", () => {
    const categoryName = "Biryani";
    const categoryItem = CATEGORIES_DATA.find(
      (cat) => cat.name === categoryName
    );

    render(<Product />);

    // Check if the heading with category name is rendered
    expect(screen.getByText(categoryName)).toBeInTheDocument();

    // Check if the subTitle is rendered
    expect(screen.getByText(categoryItem.data.subTitle)).toBeInTheDocument();

    // Check if the mocked Restraunts component is rendered with the correct props
    expect(screen.getByTestId("mocked-restaurants")).toBeInTheDocument();
    expect(screen.getByTestId("mocked-restaurants")).toHaveTextContent(
      JSON.stringify(categoryItem.data.restaurants)
    );
  });
});
