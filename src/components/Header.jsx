import React from "react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center gap-8">
        <div>
          <img src={logo} alt="logo" className="w-[170px]" />
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <ul className="flex items-center justify-between font-bold text-[18px] text-primary-text">
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
