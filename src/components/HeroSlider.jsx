import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import slider1Img from "../assets/ads/1.jpeg";
import slider2Img from "../assets/ads/2.jpeg";
import slider3Img from "../assets/ads/3.png";
import slider4Img from "../assets/ads/4.jpeg";
import slider5Img from "../assets/ads/5.png";

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
        <img src={slider1Img} alt="slider1" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2Img} alt="slider2" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3Img} alt="slider3" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4Img} alt="slider4" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5Img} alt="slider5" loading="lazy" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
