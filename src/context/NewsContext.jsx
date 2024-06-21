import { createContext, useState } from "react";

// Create a context for the News
export const NewsContext = createContext();

// NewsProvider component which will wrap around the components that need access to this context
export const NewsProvider = ({ children }) => {
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // State to store the news data for the current page
  const [newsData, setNewsData] = useState([]);

  // State to store all fetched news data
  const [allNewsData, setAllNewsData] = useState([]);

  // State to store the current page number
  const [currPage, setCurrPage] = useState(1);

  // State to store the total number of results
  const [totalResults, setTotalResults] = useState(0);

  // State to store the current query (category or keyword for news search)
  const [query, setQuery] = useState("All");

  // State to store the search query entered by the user
  const [searchQuery, setSearchQuery] = useState("");

  // Base URL for the News API
  const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=`;

  // API key for the News API
  const apiKey = 45b45ce96f3740fc91567c6ed2e04697;

  // Function to fetch news data from the API
  const fetchNews = async (page = 1) => {
    // Set loading to true to indicate that a fetch operation is in progress
    setLoading(true);
    try {
      // Make the API call
      const response = await fetch(`${url}${page}&apiKey=${apiKey}`);

      // Parse the response JSON data
      const data = await response.json();

      // Set the news data for the current page
      setNewsData(data.articles);

      // Set all news data (you might want to append this if loading more pages)
      setAllNewsData(data.articles);

      // Set the total number of results
      setTotalResults(data.totalResults);

      // Set the current page number
      setCurrPage(page);
    } catch (error) {
      console.error(error);
    } finally {
      // Set loading to false to indicate that the fetch operation has completed
      setLoading(false);
    }
  };

  // Provide the context value to children components
  return (
    <NewsContext.Provider
      value={{
        fetchNews,
        loading,
        newsData,
        setNewsData,
        allNewsData,
        currPage,
        totalResults,
        query,
        setQuery,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
