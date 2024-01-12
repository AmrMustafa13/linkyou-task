import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProductSlider = ({ title, products }) => {
  return (
    <section>
      <div className="py-8 text-primary flex items-center justify-between container">
        <h2 className="text-[28px] font-bold">{title}</h2>
        <div className="flex items-center">
          <h3 className="text-[22px]">مشاهدة الكل</h3>
          <MdKeyboardArrowLeft className=" text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
