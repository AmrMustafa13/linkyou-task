import React from "react";
import downArrow from "../assets/down-arrow.svg";
import canadaFlag from "../assets/canada.svg";

const Navbar = () => {
  return (
    <nav className="bg-primary text-secondary">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={downArrow} alt="down arrow" />
              <span>كندا</span>
            </div>
            <img src={canadaFlag} alt="canada flag" />
          </div>
          <div className="flex items-center gap-2">
            <img src={downArrow} alt="down arrow" />
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
