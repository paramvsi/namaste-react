import { Button } from "@material-tailwind/react";
import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
// import vegUrl from "../../../../assets/images/veg.png";
// import nonVegUrl from "../../../../assets/images/non-veg.png";
import { useCart } from "../../../../cart/CardContext";

const FoodInfo = ({ info, remove }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const handleAddToCart = (product) => {
    if (!remove) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  };

  const cartContains = (productId) => {
    const items = cartItems.filter((c) => c.id === productId);
    info.cartLength = items.length;
    return items && items.length > 0;
  };

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-300 min-h-24 p-0 lg:p-5">
      <div>
        <p className="text-md text-gray-800 ">
          <span className="mx-1">
            {/*  {info.itemAttribute.vegClassifier === "VEG" ? (
              <img className="w-4" src={vegUrl} alt="veg" />
            ) : (
              <img className="w-4" src={nonVegUrl} alt="non veg" />
            )} */}
          </span>
          {info.name}
        </p>
        <p className="flex justify-start items-center text-sm text-gray-600">
          {info.price ? (
            <>
              <MdCurrencyRupee className="mr-[0.25px]" /> {info.price / 100}
            </>
          ) : (
            <>
              <MdCurrencyRupee className="mr-[0.25px]" />{" "}
              {info.defaultPrice / 100}
            </>
          )}
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            handleAddToCart(info);
          }}
          variant="outlined"
          className="text-green-600 w-14 lg:w-24 px-3 py-2"
        >
          {remove
            ? "REMOVE"
            : cartItems.length > 0 && cartContains(info.id)
            ? info.cartLength + " +"
            : "ADD"}
        </Button>
      </div>
    </div>
  );
};

export default FoodInfo;
