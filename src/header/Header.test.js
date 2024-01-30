import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { CartProvider } from "../cart/CardContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders Logo and Navbar components", () => {
    const { getByTestId } = render(
      <CartProvider>
        {" "}
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartProvider>
    );

    const logoComponent = getByTestId("logo");
    expect(logoComponent).toBeInTheDocument();

    // Check if Navbar component is rendered
    const navbarComponent = getByTestId("navbar");
    expect(navbarComponent).toBeInTheDocument();
  });
});
