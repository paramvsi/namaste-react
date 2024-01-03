import React from "react";

const Link = ({ name, component }) => {
  return (
    <div
      key={name}
      className="flex items-center text-sm mx-2 text-gray-800 lg:text-xl lg:mx-6 cursor-pointer hover:text-red-600"
    >
      {component}
      <span className="hidden lg:block lg:mx-2">{name}</span>
    </div>
  );
};

export default Link;
