import React from "react";
import { FlipWords } from "./FlipWords";
import CardsContainer from "./CardsContainer";
import FilterComp from "./FilterComp";

const HomePage = () => {
  return (
    <div className="main-content">
      <h1 className="p-10 gradient-text md:text-7xl sm:text-5xl text-4xl font-bold text-center">
        <p>Stay Updated with the</p>
        <p className="mt-4">
          Latest{" "}
          <FlipWords
            words={["Tech", "World", "Sports", "Finance", "Entertainment"]}
            className={"not-gradient-text"}
          />{" "}
          News
        </p>
      </h1>
      <div className="all-cards p-5 mt-5">
        <div className="filter-bar px-5">
          <FilterComp />
        </div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default HomePage;
