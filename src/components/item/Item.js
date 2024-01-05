import React from "react";

const Item = ({ name, image }) => {
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  return (
    <div className="mr-4 w-16 lg:w-28 h-auto flex-grow-0 flex-shrink-0">
      <img src={baseUrl + image} alt={name} />
    </div>
  );
};

export default Item;
