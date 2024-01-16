import React from "react";
import imgUrl from "../../assets/images/logo.jpg";

const Logo = () => {
  return (
    <div className="flex justify-start items-center cursor-pointer">
      <img src={imgUrl} alt="AZFoodLogo" className="m-2 w-5 h-auto lg:w-20 " />{" "}
      <span className="mx-1 text-xl lg:text-3xl lg:mx-3 text-red-600">
        {" "}
        AZ Foods
      </span>
    </div>
  );
};

export default Logo;
