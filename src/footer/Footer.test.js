import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("renders Footer component with correct elements", () => {
    render(<Footer />);

    // Check if the text "AZ Foods" is rendered
    expect(screen.getByText("AZ Foods")).toBeInTheDocument();

    // Check if the copyright text is rendered
    expect(screen.getByText("© azfoods industries.")).toBeInTheDocument();

    // Check if the text "Follow us on" is rendered
    expect(screen.getByText("Follow us on")).toBeInTheDocument();

    // Check if the Facebook icon and text are rendered
    expect(screen.getByText("Facebook")).toBeInTheDocument();

    // Check if the Twitter icon and text are rendered
    expect(screen.getByText("Twitter")).toBeInTheDocument();

    // Check if the Youtube icon and text are rendered
    expect(screen.getByText("Youtube")).toBeInTheDocument();

    // Check if the Snapchat icon and text are rendered
    expect(screen.getByText("Snapchat")).toBeInTheDocument();
  });
});
