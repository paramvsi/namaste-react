import React from "react";
import { render, screen } from "@testing-library/react";
import Page404 from "./Page404";
import "@testing-library/jest-dom";

describe.skip("Page404 Component", () => {
  it("renders Page404 component with correct elements", () => {
    render(<Page404 />);

    // Check if the main section with class page_404 is rendered
    expect(screen.getByTestId("page-404")).toBeInTheDocument();

    // Check if the h1 element with text '404' is rendered
    expect(screen.getByText("404")).toBeInTheDocument();

    // Check if the heading with class h2 is rendered
    expect(screen.getByText("Look like you're lost")).toBeInTheDocument();

    // Check if the paragraph is rendered
    expect(
      screen.getByText("the page you are looking for not available!")
    ).toBeInTheDocument();

    // Check if the link to home is rendered with correct href
    const homeLink = screen.getByText("Go to Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
