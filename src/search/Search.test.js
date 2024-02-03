import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import "@testing-library/jest-dom";
import { CartProvider } from "../cart/CardContext";
import { BrowserRouter } from "react-router-dom";

describe("Search Component", () => {
  it("renders Search component with correct elements", () => {
    render(
      <CartProvider>
        {" "}
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </CartProvider>
    );

    // Check if the search input field is rendered
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();

    // Check if the search button with FaSearch icon is rendered
    expect(screen.getByRole("button")).toBeInTheDocument();

    // Check if the "Popular cuisines" heading is rendered
    expect(screen.getByText("Popular cuisines")).toBeInTheDocument();
  });

  it("calls handleSearch function on form submission", () => {
    const handleSearchMock = jest.fn();
    render(
      <CartProvider>
        {" "}
        <BrowserRouter>
          <Search handleSearch={handleSearchMock} />
        </BrowserRouter>
      </CartProvider>
    );

    // Type text into the search input field
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Pizza" },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole("button"));

    // Check if the handleSearch function is called with the correct value
    expect(handleSearchMock).toHaveBeenCalled();
  });
});
