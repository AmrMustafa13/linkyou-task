import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDownMenu = ({ title, items }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [mdScreen, setMdScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && window.innerWidth < 1200) {
        setMdScreen(true);
        setClicked(false);
      } else {
        setMdScreen(false);
      }
    });
  }, []);

  return (
    <li
      className="flex items-center gap-2 relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked((prev) => !prev)}
    >
      <span>{title}</span>
      <IoIosArrowDown className="text-xl hidden xl:block" />
      {hovered && !mdScreen && (
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
      {clicked && mdScreen && (
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
