import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Link from "./Link";
import "@testing-library/jest-dom";

describe("Link Component", () => {
  const mockProps = {
    name: "Home",
    component: <span>Icon</span>,
  };

  it("renders Link component with provided props", () => {
    render(<Link {...mockProps} />);

    // Check if the name is rendered
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Check if the component is rendered
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});
