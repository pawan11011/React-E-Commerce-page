import React from "react";
import { Search } from "lucide-react";

const SearchFilter = () => {
  return (
    <>
      <div className="mb-4 p-3 bg-gray-500 rounded-2xl shadow-xl border border-y-gray-500">
        <div className="flex items-center border border-gray-600">
          <Search className="w-5 h-5 pr-2 text-gray-600 text-2xl ml-4 border border-none " />
          <input
            type="text"
            placeholder="Searcg High-performing products in your area."
            className="w-full p-3 outline-none bg-gray-800 placeholder-gray-600 text-balance font-medium"
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
