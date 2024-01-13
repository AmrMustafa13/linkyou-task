import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import CategoryCard from "./CategoryCard";

const CategoriesSlider = ({ categories }) => {
  const swiperConfig = {
    loop: false,
    modules: [FreeMode],
    spaceBetween: 8,
    slidesPerView: 2.6,
  };

  return (
    <div className="container">
      <Swiper {...swiperConfig} className="grid py-1">
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
