import React from "react";
import { MdOutlineStars } from "react-icons/md";

const Block = ({ name, imgId, rating, time, cuisines, location }) => {
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  return (
    <div className="flex flex-col my-4 mr-7 max-w-[150px] lg:max-w-[300px]">
      <img
        className="w-[140px] max-h-[80px] rounded-xl lg:w-[298px] lg:max-h-[200px] my-1"
        src={baseUrl + imgId}
        alt={name}
      />
      <h4 className="font-semibold text-gray-800">
        {name.length > 30 ? name.substring(0, 30) + "...." : name}
      </h4>
      <div className="font-medium text-gray-600 text-lg flex justify-start items-center">
        <MdOutlineStars color="green" className="mr-1" />
        {rating} . {time} mins
      </div>
      <div className="text-gray-600 text-sm">{cuisines}</div>
      <div className="text-gray-600 text-sm">{location}</div>
    </div>
  );
};

export default Block;
