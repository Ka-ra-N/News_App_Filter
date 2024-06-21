import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { NewsContext } from "../context/NewsContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { setSearchQuery } = useContext(NewsContext); // Get setSearchQuery from context

  const handleSearch = () => {
    setOpen(!open);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  return (
    <nav className="flex md:flex-row flex-col justify-between p-3 py-5 gap-[3rem] items-center border-b border-b-zinc-900 shadow-lg">
      <h1 className="text-3xl text-primary font-bold font-serif">TheNews</h1>
      <div className="search-icon flex-1 flex gap-[1rem] items-center justify-center">
        <button
          className={`text-3xl flex items-center gap-5 duration-200 ${
            !open ? "bg-secondary p-3 px-6 rounded-full" : ""
          }`}
          onClick={handleSearch}
        >
          <FiSearch />
          {!open && <span className="text-base">Search Articles</span>}
        </button>

        <input
          type="text"
          className={`${
            !open ? "flex-0 w-0" : "flex-1 p-2"
          } duration-300 text-base bg-secondary outline-none border-none rounded-lg focus:placeholder:opacity-0 placeholder:duration-200`}
          placeholder="Search Articles"
          onChange={handleInputChange} // Handle input change
        />
      </div>
      <a
        className="text-base hover:opacity-80 duration-100 bg-blue-700 p-3 px-6 rounded-full hidden md:block"
        href="#"
      >
        Favorite Articles
      </a>
    </nav>
  );
};

export default Navbar;


