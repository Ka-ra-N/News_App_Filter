import React, { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import { NewsContext } from "../context/NewsContext";
import { DateConverter } from "./ConvertDate";
import AccessButton from "./AccessButton";

const CardsContainer = () => {
  // Destructuring context values and functions
  const {
    loading,
    newsData,
    currPage,
    fetchNews,
    totalResults,
    setNewsData,
    allNewsData,
    searchQuery,
    query,
  } = useContext(NewsContext);

  // Fetch news whenever the query or current page changes
  useEffect(() => {
    fetchNews(currPage);
  }, [query, currPage]);

  // Filter news data based on the search query
  useEffect(() => {
    if (searchQuery === "") {
      setNewsData(allNewsData);
    } else {
      const filteredArticles = allNewsData.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setNewsData(filteredArticles);
    }
  }, [searchQuery, allNewsData, setNewsData]);

  // Handle pagination next button
  const handleNextBtn = () => {
    if (currPage * 10 < totalResults) {
      fetchNews(currPage + 1);
    }
  };

  // Handle pagination previous button
  const handlePreviousBtn = () => {
    if (currPage > 1) {
      fetchNews(currPage - 1);
    }
  };

  return (
    <>
      {/* News Cards Container */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-10 mt-5">
        {loading ? (
          <h1>Loading Articles...</h1>
        ) : (
          newsData?.map((article, index) => (
            <NewsCard
              key={index}
              newsTitle={article.title}
              imgSrc={article.urlToImage}
              description={article.description}
              articleUrl={article.url}
              publishedAt={DateConverter(article.publishedAt)}
            />
          ))
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="btn-container mt-5 p-5 flex sm:flex-row sm:justify-between justify-center gap-5 flex-col-reverse">
        <AccessButton
          value="Previous"
          isDisabled={currPage === 1}
          handleBtn={handlePreviousBtn}
        />
        <AccessButton
          value="Next"
          isDisabled={currPage * 10 >= totalResults}
          handleBtn={handleNextBtn}
        />
      </div>
    </>
  );
};

export default CardsContainer;
