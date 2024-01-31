import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "./Item";
import "@testing-library/jest-dom";

describe("Item Component", () => {
  const mockProps = {
    name: "Item Name",
    image: "imageId",
  };

  it("renders Item component with provided props", () => {
    render(<Item {...mockProps} />);

    // Check if the name is rendered
    expect(screen.getByAltText("Item Name")).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText("Item Name")).toHaveAttribute(
      "src",
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/imageId"
    );
  });
});
