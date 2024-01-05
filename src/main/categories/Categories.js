import React, { useEffect, useState } from "react";
import Item from "../../components/item/Item";
import { CATEGORIES } from "../../data/categories.ts";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  return (
    <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
      {categories.map((category) => (
        <Item
          key={category?.id}
          name={category.action?.text}
          image={category?.imageId}
        />
      ))}
    </div>
  );
};

export default Categories;
