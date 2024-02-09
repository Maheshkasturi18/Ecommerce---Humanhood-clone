import React, { useState } from "react";
// import "./SearchBar.css";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => {
    // Handle the search functionality
    console.log("Searching for:", searchText);
  };

  const handleCancel = () => {
    // Clear the search text and close the search bar
    setSearchText("");
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={`search-bar mx-auto ${isSearchOpen ? "open" : ""}`}>
      <div className="input-group search-inp-grp my-4 ">
        <div class="form-floating  ">
          <input
            type="text"
            placeholder="Search..."
            className="form-control shadow-none ms-0 border-0"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <label for="search">Search</label>
        </div>

        <button
          class="btn m-0"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          <i class="fa-solid fa-magnifying-glass  fs-5 mt-1 "></i>
        </button>
      </div>
      <button
        class="btn "
        type="button"
        id="button-addon2"
        onClick={handleCancel}
      >
        <i class="fa-solid fa-xmark fs-3"></i>
      </button>
    </div>
  );
}

export default SearchBar;
