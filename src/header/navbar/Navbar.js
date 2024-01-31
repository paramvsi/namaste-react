import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../cart/CardContext";

const Navbar = () => {
  const links = [
    { component: <FaSearch />, name: "Search", to: "/search" },
    { component: <TbDiscount2 />, name: "Offers", to: "/offers" },
    { component: <MdOutlineSupportAgent />, name: "Help", to: "/help" },
    { component: <FaUser />, name: "Sign In", to: "/login" },
    { component: <FaCartPlus />, name: "Cart", to: "/cart", showBanner: true },
  ];

  const { cartItems } = useCart();
  return (
    <nav data-testid={"navbar"} className="flex justify-between items-center ">
      {links.map((link) => (
        <Link key={link.name} to={link.to}>
          <div className="flex items-center text-sm mx-2 text-gray-800 lg:text-xl lg:mx-6 cursor-pointer hover:text-red-600">
            {link.component}
            <span className="hidden lg:block lg:ml-2">{link.name}</span>
            {link.showBanner && cartItems && (
              <sup className="text-red-600 font-extrabold">
                {cartItems.length}
              </sup>
            )}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
