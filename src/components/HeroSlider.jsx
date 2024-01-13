import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import slider1Img from "../assets/ads/1.webp";
import slider2Img from "../assets/ads/2.webp";
import slider3Img from "../assets/ads/3.webp";
import slider4Img from "../assets/ads/4.webp";
import slider5Img from "../assets/ads/5.webp";

const HeroSlider = () => {
  const swiperConfig = {
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, FreeMode],
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.25,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 1.25,
        spaceBetween: 15,
      },
    },
  };

  return (
    <Swiper {...swiperConfig} className="flex justify-between items-center">
      <SwiperSlide>
        <img src={slider1Img} alt="slider1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2Img} alt="slider2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3Img} alt="slider3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4Img} alt="slider4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5Img} alt="slider5" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
