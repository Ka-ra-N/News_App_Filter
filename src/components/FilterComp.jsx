import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

const FilterComp = () => {
  // State to manage the current filter
  const [currFilter, setCurrFilter] = useState("All");
  
  // Destructuring setQuery and fetchNews from the NewsContext
  const { setQuery, fetchNews } = useContext(NewsContext);

  // Handle filter change
  const handleCurrFilter = (filter) => {
    const selectedFilter = filter.target.textContent;
    setCurrFilter(selectedFilter);
    setQuery(selectedFilter);
  };

  return (
    <div className="bg-secondary p-5 rounded-lg">
      <ul className="flex sm:gap-8 gap-5 flex-wrap">
        {[
          "All",
          "India",
          "Business",
          "Technology",
          "Sports",
          "Entertainment",
          "Health",
          "Science",
          "Games",
          "Automobile",
          "World",
          "Politics",
          "Finance",
        ].map((filter) => (
          <li
            onClick={handleCurrFilter}
            className={`py-1 px-4 rounded-full cursor-pointer ${
              currFilter === filter ? "bg-blue-500 text-white" : ""
            }`}
            key={filter}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComp;
