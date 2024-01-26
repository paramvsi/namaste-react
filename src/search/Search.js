import React from "react";
import { FaSearch } from "react-icons/fa";
import Categories from "../main/categories/Categories";

const Search = () => {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="w-full lg:w-3/4 m-auto items-center h-dvh border-b-[1px] border-b-gray-200 p-4 lg:p-16">
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          className="w-full lg:w-[90%] border-2 border-gray-600 h-14 px-2"
          type="text"
          placeholder="Search..."
        />
        <button
          className="border-2 border-gray-600 border-l-0 h-14 px-5"
          type="submit"
        >
          <FaSearch style={{ fontSize: "1.2em" }} />
        </button>
      </form>

      <h3 className="text-gray-800 text-xl lg:text-3xl font-semibold my-3 mt-24">
        Popular cuisines
      </h3>
      <Categories />
    </div>
  );
};

export default Search;
