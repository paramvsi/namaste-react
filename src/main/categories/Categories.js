import React, { useEffect, useState } from "react";
import Item from "../../components/item/Item";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([{ name: "Biriyani" }]);
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <Item name={category.name} />
      ))}
    </div>
  );
};

export default Categories;
