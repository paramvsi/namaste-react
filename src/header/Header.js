import React from "react";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="flex justify-between my-2 mx-auto shadow-md shadow-gray-300">
      <Logo className="cursor-pointer" />
      <Navbar />
    </div>
  );
};

export default Header;
