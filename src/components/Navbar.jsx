import React from "react";
import canadaFlag from "../assets/canada.svg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-primary text-secondary hidden sm:block">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <IoIosArrowDown className=" text-xl" />
              <span>كندا</span>
            </div>
            <img src={canadaFlag} alt="canada flag" />
          </div>
          <div className="flex items-center gap-2">
            <IoIosArrowDown className=" text-xl" />
            <span>عربي</span>
          </div>
        </div>
        <div className=" text-[18px] font-bold flex items-center gap-8">
          <button className="text-primary-text bg-white py-2 px-4 rounded-md">
            التسجيل
          </button>
          <span>تسجيل الدخول</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
