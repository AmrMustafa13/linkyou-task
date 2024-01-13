import React, { useState } from "react";
import downArrow from "../assets/down-arrow.svg";

const FooterAccordion = ({ title, items }) => {
  const [showItems, setShowItems] = useState(false);

  return (
    <>
      <div
        className="flex justify-between items-center border-b-2 border-white py-2 cursor-pointer"
        onClick={() => setShowItems((prev) => !prev)}
      >
        <span className="font-bold  text-secondary">{title}</span>
        <img src={downArrow} alt="down-arrow" />
      </div>
      {showItems && (
        <ul className=" list-disc mr-8 ">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FooterAccordion;
