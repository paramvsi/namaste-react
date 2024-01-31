import React from "react";
import { render, screen } from "@testing-library/react";
import Block from "./Block";
import "@testing-library/jest-dom";

describe("Block Component", () => {
  const mockProps = {
    name: "Restaurant Name",
    imgId: "imageId",
    rating: 4.5,
    time: 30,
    cuisines: "Cuisine Type",
    location: "Restaurant Location",
    discount: {
      header: "20% off",
      subHeader: "on orders above $30",
    },
    showOffers: true,
  };

  it("renders Block component with provided props", () => {
    render(<Block {...mockProps} />);

    // Check if the name is rendered
    expect(screen.getByText("Restaurant Name")).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText("Restaurant Name")).toBeInTheDocument();

    // Check if the rating and time are rendered
    expect(screen.getByText("4.5 . 30 mins")).toBeInTheDocument();

    // Check if the cuisines are rendered
    expect(screen.getByText("Cuisine Type")).toBeInTheDocument();

    // Check if the location is rendered
    expect(screen.getByText("Restaurant Location")).toBeInTheDocument();

    // Check if the discount is rendered when showOffers is true
    expect(
      screen.getByText("20% off, on orders above $30")
    ).toBeInTheDocument();
  });

  it("trims long names to 30 characters", () => {
    render(
      <Block
        {...mockProps}
        name="Very Long Restaurant Name That Exceeds Thirty Characters"
      />
    );

    // Check if the name is trimmed to 30 characters and followed by "..."
    expect(
      screen.getByText("Very Long Restaurant Name That....")
    ).toBeInTheDocument();
  });

  it("does not render discount when showOffers is false", () => {
    render(<Block {...mockProps} showOffers={false} />);

    // Check if the discount is not rendered when showOffers is false
    expect(screen.queryByText("20% off, on orders above $30")).toBeNull();
  });
});
