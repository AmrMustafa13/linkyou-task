import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDownMenu = ({ title, items }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="flex items-center gap-2 relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{title}</span>
      <IoIosArrowDown className=" text-xl" />
      {hovered && (
        <ul className="absolute bg-white flex flex-col gap-2 border border-primary z-10 top-6">
          {items.map((item) => (
            <li
              className=" border-b border-primary cursor-pointer px-2 py-1 text-nowrap font-normal"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropDownMenu;
