import React, { useState } from "react";
import logo from "../assets/logo.png";
import footerLogo from "../assets/footer-logo.png";
import SearchBar from "./SearchBar";
import DropDownMenu from "./DropDownMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header
      className="bg-primary sm:bg-white"
      style={{
        borderBottom: "1px solid rgba(49, 101, 174, 0.50)",
      }}
    >
      <div className="container flex items-center gap-8">
        <div className="hidden xl:block">
          <img src={logo} alt="logo" className="w-[170px]" />
        </div>
        <div className="sm:flex flex-col flex-1 gap-2 xl:gap-6 hidden">
          <ul className="flex items-center justify-between font-bold text-[18px] text-primary-text mt-4 xl:mt-0">
            <li className="text-secondary">الرئيسية</li>
            <DropDownMenu
              title="مركبات و سيارات"
              items={[
                "سيارات",
                "درجات نارية",
                "مراكب",
                "نقل ثقيل-حافلات-مركبات اخري",
                "قطع غيار و إكسسوارات",
              ]}
            />
            <DropDownMenu
              title="عقارات"
              items={["سكنية", "تجارية و مكاتب", "فلل", "منازل و أراضي"]}
            />
            <DropDownMenu
              title="موبايلات وتابلت"
              items={["موبايلات", "أجهزة لوحية", "قطع غيار و إكسسوارات"]}
            />
            <DropDownMenu
              title="إلكترونيات"
              items={[
                "تلفزيونات",
                "كومبيوتر و لابتوب",
                "كاميرات",
                "أجهزة منزلية",
                "ألعاب فيديو منصاتها",
              ]}
            />
            <li>المزيد من الفئات</li>
          </ul>
          <div className="flex items-center justify-between gap-8">
            <div className="xl:hidden">
              <img src={logo} alt="logo" className="w-[95px]" />
            </div>
            <SearchBar />
            <button className="text-white bg-secondary py-2 px-4 rounded-md font-bold text-xl">
              إضافة إعلان
            </button>
          </div>
        </div>
        <div className="sm:hidden flex justify-between items-center flex-1 py-1">
          {!showSearchBar && (
            <>
              <AiOutlineMenu className="text-3xl text-secondary cursor-pointer" />
              <img src={footerLogo} alt="logo" className="w-[80px]" />
            </>
          )}
          {showSearchBar && (
            <input
              type="text"
              placeholder="البحث عن السيارات، المنازل، الهواتف و أكثر..."
              className="w-full text-[18px] text-primary-text ml-4 my-2 outline-none border-secondary border-2 rounded-xl py-1 px-8"
            />
          )}
          <div className="p-2 rounded-full bg-secondary text-2xl text-white flex justify-center items-center">
            {showSearchBar ? (
              <AiOutlineClose
                className=" cursor-pointer"
                onClick={() => setShowSearchBar(false)}
              />
            ) : (
              <IoMdSearch
                className=" cursor-pointer"
                onClick={() => setShowSearchBar(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
