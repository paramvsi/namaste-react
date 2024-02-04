import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLocation, useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import "@testing-library/jest-dom";

// Mocking fetch for API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockApiResponse),
  })
);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Use the actual module for all non-mocked parts
  useLocation: jest.fn(),
  useParams: jest.fn(),
}));

const mockApiResponse = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              // Mock data for the restaurant info
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      title: "Category 1",
                      // Mock data for the food category
                    },
                  },
                },
                // Add more mock data for other food categories
              ],
            },
          },
        },
      },
    ],
  },
};

beforeEach(() => {
  jest.clearAllMocks();
  useLocation.mockReturnValue({ pathname: `/restaurant/34633` });

  // Mock the useParams hook
  useParams.mockReturnValue({ id: "34633" });
});

describe("RestaurantDetails Component", () => {
  it("renders RestaurantDetails component with correct elements", async () => {
    render(<RestaurantDetails />);

    // Wait for the API call to complete and the component to render
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    // Check if the restaurant header is rendered
    expect(screen.getByText("Restaurant Name")).toBeInTheDocument();
  });

  it("handles opening and closing food categories", async () => {
    render(<RestaurantDetails />);

    // Wait for the API call to complete and the component to render
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    // Check if the initial state is correct
    expect(screen.queryByText("Category 1 content")).toBeNull();

    // Click on the category to open it
    userEvent.click(screen.getByText("Category 1"));

    // Check if the category content is rendered
    expect(screen.getByText("Category 1 content")).toBeInTheDocument();

    // Click again to close the category
    userEvent.click(screen.getByText("Category 1"));

    // Check if the category content is not rendered
    expect(screen.queryByText("Category 1 content")).toBeNull();
  });
});
