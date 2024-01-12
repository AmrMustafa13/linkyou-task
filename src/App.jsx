import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Categories from "./components/Categories";
import ProductSlider from "./components/ProductSlider";
import { productsData } from "./data/products";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSlider />
      <Categories />
      <ProductSlider title="أدوات أخري" products={productsData} />
      <ProductSlider title="مركبات و سيارات" products={productsData} />
      <ProductSlider title="عقارات" products={productsData} />
      <ProductSlider title="موبايلات و تابلت" products={productsData} />
    </>
  );
};

export default App;
