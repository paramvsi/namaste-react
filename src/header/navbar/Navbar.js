import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Link from "../../components/link/Link";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { component: <FaSearch />, name: "Search" },
    { component: <TbDiscount2 />, name: "Offers" },
    { component: <MdOutlineSupportAgent />, name: "Help" },
    { component: <FaUser />, name: "Sign In" },
    { component: <FaCartPlus />, name: "Cart" },
  ];
  return (
    <nav className="flex justify-between items-center ">
      {links.map((link) => (
        <Link key={link.name} name={link.name} component={link.component} />
      ))}
    </nav>
  );
};

export default Navbar;
