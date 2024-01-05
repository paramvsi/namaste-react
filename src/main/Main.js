import React from "react";
import Categories from "./categories/Categories";

const Main = () => {
  return (
    <div>
      <section className="mx-3 lg:max-w-6xl lg:m-auto border-b-[1px] border-b-gray-200 py-4">
        <h3 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3">
          What's on your mind?
        </h3>
        <Categories />
      </section>
    </div>
  );
};

export default Main;
