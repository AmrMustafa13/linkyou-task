import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div
      className="rounded-xl flex items-center gap-5  h-full text-center flex-col justify-between py-[14px] px-[5px] xl:flex-row xl:px-[14px] border-2 border-transparent hover:border-secondary"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img
        src={category.img}
        alt={category.title}
        className="w-[62.5px] h-[62.5px] xl:w-[75px] xl:h-[75px]"
      />
      <span className="sm:text-[22px] text-primary flex-1 flex items-end xl:justify-center xl:items-center">
        {category.title}
      </span>
    </div>
  );
};

export default CategoryCard;
