import React, { useEffect, useState } from "react";
import Item from "../../components/item/Item";
import { CATEGORIES } from "../../data/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  return (
    <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
      {categories.map((category) => (
        <Link
          key={category?.id}
          to={`/product/${category.action?.text}`}
          className="cursor-pointer"
        >
          {" "}
          <Item name={category.action?.text} image={category?.imageId} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
