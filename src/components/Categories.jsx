import React from "react";
import category1Img from "../assets/categories/1.jpeg";
import category2Img from "../assets/categories/2.jpeg";
import category3Img from "../assets/categories/3.jpeg";
import category4Img from "../assets/categories/4.jpeg";
import category5Img from "../assets/categories/5.jpeg";
import category6Img from "../assets/categories/6.jpeg";
import category7Img from "../assets/categories/7.jpeg";
import category8Img from "../assets/categories/8.jpeg";
import category9Img from "../assets/categories/9.jpeg";
import category10Img from "../assets/categories/10.jpeg";
import category11Img from "../assets/categories/11.jpeg";
import category12Img from "../assets/categories/12.jpeg";
import CategoriesSlider from "./CategoriesSlider";
import CategoryCard from "./CategoryCard";

const categoriesData = [
  {
    id: 1,
    title: "عقارات",
    img: category1Img,
  },
  {
    id: 2,
    title: "موبايلات و تابلت",
    img: category2Img,
  },
  {
    id: 3,
    title: "الكترونيات",
    img: category3Img,
  },
  {
    id: 4,
    title: "حيوانات أليفة",
    img: category4Img,
  },
  {
    id: 5,
    title: "الأعمال و الصناعه",
    img: category5Img,
  },
  {
    id: 6,
    title: "مركبات و سيارات",
    img: category6Img,
  },
  {
    id: 7,
    title: "أخري",
    img: category7Img,
  },
  {
    id: 8,
    title: "اثاث و ديكور",
    img: category8Img,
  },
  {
    id: 9,
    title: "موضة  ومستلزمات تجميل",
    img: category9Img,
  },
  {
    id: 10,
    title: "المستلزمات الرياضية والهويات",
    img: category10Img,
  },
  {
    id: 11,
    title: "خدمات",
    img: category11Img,
  },
  {
    id: 12,
    title: "وظائف",
    img: category12Img,
  },
];

const Categories = () => {
  return (
    <section>
      <div className="container">
        <h2 className=" text-primary text-[28px] font-bold py-8">الفئات</h2>
        <div className="sm:hidden">
          <CategoriesSlider categories={categoriesData} />
        </div>
        <div
          className=" grid-cols-3 gap-4 xl:gap-10 hidden sm:grid"
          style={{
            gridAutoRows: "1fr",
          }}
        >
          {categoriesData.map((category) => {
            return <CategoryCard category={category} key={category.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
