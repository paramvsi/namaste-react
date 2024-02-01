import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Help from "./Help";
import "@testing-library/jest-dom";

describe("Help Component", () => {
  it("renders Help component with correct elements", () => {
    render(<Help />);

    // Check if the heading "Help and Support" is rendered
    expect(screen.getByText("Help and Support")).toBeInTheDocument();

    // Check if all the questions (accordion headers) are rendered
    expect(
      screen.getByText("I want to partner my restaurant with AZ")
    ).toBeInTheDocument();
    expect(
      screen.getByText("What is AZ Customer Care Number?")
    ).toBeInTheDocument();
    expect(screen.getByText("Can I edit my order?")).toBeInTheDocument();
    expect(screen.getByText("I want to cancel my order")).toBeInTheDocument();
    expect(
      screen.getByText("Is there a minimum order value?")
    ).toBeInTheDocument();
    expect(screen.getByText("Do you charge for delivery?")).toBeInTheDocument();
    expect(
      screen.getByText("What are your delivery hours?")
    ).toBeInTheDocument();
  });

  it("toggles accordion items on click", () => {
    render(<Help />);

    // Click on the first accordion header
    fireEvent.click(
      screen.getByText("I want to partner my restaurant with AZ")
    );

    // Check if the corresponding accordion body is displayed
    expect(
      screen.getByText("Send us an email @azfoods.com")
    ).toBeInTheDocument();

    // Click on the second accordion header
    fireEvent.click(screen.getByText("What is AZ Customer Care Number?"));

    // Check if the corresponding accordion body is displayed
    expect(
      screen.getByText("You can email us your issue on support@azfoods.com")
    ).toBeInTheDocument();

    // Click on the first accordion header again to close it
    fireEvent.click(
      screen.getByText("I want to partner my restaurant with AZ")
    );
  });
});
