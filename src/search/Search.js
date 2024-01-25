import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div>
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{ marginRight: "8px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{ background: "transparent", border: "none" }}
        >
          <FaSearch style={{ fontSize: "1.2em" }} />
        </button>
      </form>
    </div>
  );
};

export default Search;
