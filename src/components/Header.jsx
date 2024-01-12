import React from "react";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center gap-8">
        <div>
          <img src={logo} alt="logo" className="w-[170px]" />
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <ul className="flex items-center justify-between  font-bold text-[18px] text-primary-text">
            <li className="text-secondary">الرئيسية</li>
            <li className="flex items-center gap-2">
              <span>مركبات و سيارات</span>
              <IoIosArrowDown className=" text-xl" />
            </li>
            <li className="flex items-center gap-2">
              <span>عقارات</span>
              <IoIosArrowDown className=" text-xl" />
            </li>
            <li className="flex items-center gap-2">
              <span>موبايلات و تابلت</span>
              <IoIosArrowDown className=" text-xl" />
            </li>
            <li className="flex items-center gap-2">
              <span>إلكترونيات</span>
              <IoIosArrowDown className="text-xl" />
            </li>
            <li>المزيد من الفئات</li>
          </ul>
          <div className="flex items-center justify-between gap-8">
            <SearchBar />
            <button className="text-white bg-secondary py-2 px-4 rounded-md font-bold text-xl">
              إضافة إعلان
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
