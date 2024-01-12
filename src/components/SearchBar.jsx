import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="flex-1 flex justify-between border-primary-text rounded-xl py-1 px-8"
      style={{
        border: "2px solid",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
        borderColor: focused ? "#273D5D" : "rgba(49, 101, 174, 0.25)",
      }}
    >
      <input
        type="text"
        placeholder="البحث عن السيارات، المنازل، الهواتف و أكثر..."
        className="w-full  text-[18px] text-primary-text outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <IoMdSearch className="text-secondary text-4xl cursor-pointer" />
    </div>
  );
};

export default SearchBar;
