import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import ProductCard from "./ProductCard";

const ProductSlider = ({ title, products }) => {
  const swiperConfig = {
    loop: false,
    modules: [FreeMode],
    spaceBetween: 20,
    breakpoints: {
      200: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4.5,
      },
    },
  };

  return (
    <section>
      <div className="py-8 text-primary flex items-center justify-between container">
        <h2 className="text-[28px] font-bold">{title}</h2>
        <div className="flex items-center">
          <h3 className="text-[22px]">مشاهدة الكل</h3>
          <MdKeyboardArrowLeft className=" text-3xl" />
        </div>
      </div>
      <div className="container">
        <Swiper {...swiperConfig} className="flex">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlider;
