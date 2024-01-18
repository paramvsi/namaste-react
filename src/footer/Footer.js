import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full flex justify-center  items-start text-white p-5 lg:p-12">
      <div className="m-7">
        <p className="text-xl">AZ Foods</p>
        &copy; azfoods industries.
      </div>
      <div className="m-7">
        <p className="text-lg">Follow us on</p>
        <div className="flex flex-col lg:flex-row justify-start gap-3 items-start lg:items-center ">
          <p className="flex gap-[2px] items-center">
            <FaFacebook /> Facebook
          </p>
          <p className="flex gap-[2px] items-center">
            <FaXTwitter /> Twitter
          </p>
          <p className="flex gap-[2px] items-center">
            <FaYoutube /> Youtube
          </p>
          <p className="flex gap-[2px] items-center">
            <FaSnapchat /> Snapchat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
