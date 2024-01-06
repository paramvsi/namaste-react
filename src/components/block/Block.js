import React from "react";

const Block = ({ name, imgId, rating, time, cuisines, location }) => {
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  return (
    <div className="flex flex-col my-4">
      <img
        className="w-[140px] h-[80px] rounded-xl lg:w-[298px] lg:h-[162px]"
        src={baseUrl + imgId}
        alt={name}
      />
      <h4>{name.substring(0, 15)}</h4>
      <div>
        {rating} . {time}
      </div>
      <div>{cuisines}</div>
      <div>{location}</div>
    </div>
  );
};

export default Block;
