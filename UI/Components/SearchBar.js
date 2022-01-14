import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const SearchBar = () => {
  const [value, updateValue] = useState("");
  return (
    <>
      <div id="searchBar" className="relative w-80 h-auto ">
        <FaSearch className="text-textSize__2_5 text-DarkMode__buttonText absolute top-0.8 left-8" />
        <input
          type="text"
          value={value}
          onChange={(event) => updateValue(event.target.value)}
          className="bg-DarkMode__secondaryBase w-full h-4 rounded-full"
        />
      </div>
    </>
  );
};

export default SearchBar;
