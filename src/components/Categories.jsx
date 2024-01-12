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
        <div
          className="grid grid-cols-3 gap-4 xl:gap-10"
          style={{
            gridAutoRows: "1fr",
          }}
        >
          {categoriesData.map((category) => {
            return (
              <div
                className="rounded-xl flex items-center gap-5 text-center flex-col justify-between py-[14px] px-[5px] xl:flex-row xl:px-[14px] border-2 border-transparent hover:border-secondary"
                style={{
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
                key={category.id}
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-[62.5px] h-[62.5px] xl:w-[75px] xl:h-[75px]"
                />
                <span className="text-[22px] text-primary flex-1 flex items-end xl:justify-center xl:items-center">
                  {category.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
