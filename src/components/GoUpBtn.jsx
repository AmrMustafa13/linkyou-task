import React from "react";
import goTopImg from "../assets/go-top.svg";
import { FaPlus } from "react-icons/fa6";

const GoUpBtn = () => {
  return (
    <div className="container">
      <div
        className="w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] rounded-full p-[2px] fixed bottom-5 z-10 cursor-pointer hidden sm:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(255, 255, 255, 0.20) 100%), #D9904E",
          boxShadow: "0px 6.25px 6.25px 0px rgba(0, 0, 0, 0.25)",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={goTopImg}
          alt="go-top"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="w-[40px] h-[40px] sm:hidden rounded-full p-[2px] fixed bottom-5 right-1/2 translate-x-1/2 z-10 cursor-pointer"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(255, 255, 255, 0.20) 100%), #D9904E",
          boxShadow: "0px 6.25px 6.25px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <FaPlus className="w-full h-full object-cover text-primary p-2 " />
      </div>
    </div>
  );
};

export default GoUpBtn;
