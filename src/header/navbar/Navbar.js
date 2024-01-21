import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { component: <FaSearch />, name: "Search", to: "/search" },
    { component: <TbDiscount2 />, name: "Offers", to: "/offers" },
    { component: <MdOutlineSupportAgent />, name: "Help", to: "/help" },
    { component: <FaUser />, name: "Sign In", to: "/login" },
    { component: <FaCartPlus />, name: "Cart", to: "/cart" },
  ];
  return (
    <nav className="flex justify-between items-center ">
      {links.map((link) => (
        <Link key={link.name} to={link.to}>
          <div className="flex items-center text-sm mx-2 text-gray-800 lg:text-xl lg:mx-6 cursor-pointer hover:text-red-600">
            {link.component}
            <span className="hidden lg:block lg:mx-2">{link.name}</span>
          </div>
        </Link>
        // <Link key={link.name} name={link.name} component={link.component} />
      ))}
    </nav>
  );
};

export default Navbar;
