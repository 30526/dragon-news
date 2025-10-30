import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold mb-3">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 gap-1">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className={"hover:bg-base-200 px-2 py-2 text-accent"}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
