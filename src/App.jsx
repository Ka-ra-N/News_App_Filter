import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

const App = () => {
  // const { loading, newsData, currPage, fetchNews, totalResults } =
  //   useContext(NewsContext);

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  // const handleNextPage = () => {
  //   if (currPage * 10 < totalResults) {
  //     fetchNews(currPage + 1);
  //   }
  // };
  // const handlePreviousPage = () => {
  //   if (currPage > 1) {
  //     fetchNews(currPage - 1);
  //   }
  // };

  return (
    <div className="bg-background min-h-screen text-textClr">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
