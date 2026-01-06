import React, { useState } from "react";
import { InitialProducts } from "../Data/Product";
import { Tag } from "lucide-react";

const AvailableCategories = [
  "All",
  ...new Set(InitialProducts.map((p) => p.category)),
];
const CategoryFilter = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6 items-center">
        <Tag className="w-5 h-5 text-orange-500 mt-2 mr-2 " />
        {AvailableCategories.map((category) => (
          <button
            className={`py-2 px-5 font-bold text-sm rounded-full transition duration-200 shadow-md text-white ${
              category === category
                ? "bg-orange-500"
                : "bg-gray-8  00 text-gray-300 hover: bg-gray-700 hover:text-orange-400 border border-gray-700"
            }`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
