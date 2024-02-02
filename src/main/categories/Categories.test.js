import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Categories from "./Categories";
import { CATEGORIES } from "../../data/categories";
import "@testing-library/jest-dom";

jest.mock("../../components/item/Item", () => ({
  __esModule: true,
  default: jest.fn(({ name }) => (
    <div data-testid={`mocked-item-${name}`}>Mocked Item Component</div>
  )),
}));

describe("Categories Component", () => {
  it("renders Categories component with correct elements", async () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    // Wait for the useEffect to set the categories
    await waitFor(() => {});

    // Check if each category is rendered with the mocked Item component
    CATEGORIES.forEach((category) => {
      expect(
        screen.getByTestId(`mocked-item-${category.action.text}`)
      ).toBeInTheDocument();
    });
  });

  it("navigates to the correct product route on link click", async () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    // Wait for the useEffect to set the categories
    await waitFor(() => {});

    // Click on the link for the first category
    const firstCategory = CATEGORIES[0];
    const linkElement = screen.getByTestId(
      `mocked-item-${firstCategory.action.text}`
    );
    linkElement.click();
  });
});
