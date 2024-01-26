import React from "react";
import { MdOutlineStars } from "react-icons/md";

const Block = ({
  name,
  imgId,
  rating,
  time,
  cuisines,
  location,
  discount,
  showOffers,
}) => {
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  return (
    <div className="flex flex-col my-3 mr-7 hover:scale-90 transition duration-500 cursor-pointer  flex-grow-0 flex-shrink-0 w-[150px] lg:w-[300px] max-w-[150px] lg:max-w-[300px] ">
      <img
        className="w-[140px] max-h-[80px] rounded-xl lg:w-[298px] lg:max-h-[200px] my-1"
        src={baseUrl + imgId}
        alt={name}
      />
      {showOffers && (
        <h1 className="absolute text-[10px] lg:text-lg  font-extrabold mt-[65px] lg:mt-[166px] ml-1 text-white bg-gradient-to-t from-black via-black to-transparent">
          {discount.header}, {discount.subHeader}
        </h1>
      )}
      <h4 className="font-semibold text-gray-800">
        {name.length > 30 ? name.substring(0, 30) + "...." : name}
      </h4>
      <div className="font-medium text-gray-600 text-lg flex justify-start items-center">
        <MdOutlineStars color="green" className="mr-1" />
        {rating} . {time} mins
      </div>
      <div className="text-gray-600 text-sm font-thin">{cuisines}</div>
      <div className="text-gray-600 text-sm font-thin">{location}</div>
    </div>
  );
};

export default Block;
