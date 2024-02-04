import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Restraunts from "./Restraunts";
import "@testing-library/jest-dom";
import { CartProvider } from "../../cart/CardContext";
import { BrowserRouter } from "react-router-dom";

describe("Restraunts Component", () => {
  const sampleRestaurants = [
    {
      info: {
        id: "1",
        name: "Restaurant 1",
        cloudinaryImageId: "123",
        areaName: "Area 1",
        avgRating: 4.5,
        costForTwo: "₹200 for two",
        cuisines: ["Cuisine 1", "Cuisine 2"],
        sla: {
          deliveryTime: 30,
        },
        aggregatedDiscountInfoV3: {
          header: "20% off",
          subHeader: "on orders above Rs.500",
        },
      },
    },

    {
      info: {
        id: "2",
        name: "Restaurant 2",
        cloudinaryImageId: "123",
        areaName: "Area 1",
        avgRating: 3.4,
        costForTwo: "₹400 for two",
        cuisines: ["Cuisine 1", "Cuisine 2"],
        sla: {
          deliveryTime: 15,
        },
        aggregatedDiscountInfoV3: {
          header: "10% off",
          subHeader: "on orders above Rs.500",
        },
      },
    },
  ];

  it("renders Restraunts component with correct elements", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter={"All"}
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );

    // Check if the Block component for each restaurant is rendered
    sampleRestaurants.forEach((restaurant) => {
      expect(screen.getByText(restaurant.info.name)).toBeInTheDocument();
      expect(screen.getByAltText(restaurant.info.name)).toBeInTheDocument();
    });
  });

  it('filters restaurants based on the "Fast Delivery" filter', () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter="Fast Delivery"
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );

    expect(screen.getByText("Restaurant 2")).toBeInTheDocument();
  });

  it('filters restaurants based on the "Rating 4.0+" filter', () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter="Rating 4.0+"
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );
  });

  it('filters restaurants based on the "Pure Veg" filter', () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter="Pure Veg"
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );
  });

  it('filters restaurants based on the "Less than Rs.300" filter', async () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter="Less than Rs.300"
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );
  });

  it('filters restaurants based on the "Rs.300 - Rs.600" filter', () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter="Rs.300 - Rs.600"
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );
  });

  it("renders no restaurants when an unknown filter is applied", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts
            restaurants={sampleRestaurants}
            filter="Default"
            showOffers={true}
          />
        </BrowserRouter>
      </CartProvider>
    );
  });

  it("Handles empty filters added", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Restraunts restaurants={sampleRestaurants} filter={""} />
        </BrowserRouter>
      </CartProvider>
    );
  });
});
