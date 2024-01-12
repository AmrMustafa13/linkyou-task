import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Categories from "./components/Categories";
import ProductSlider from "./components/ProductSlider";
import Footer from "./components/Footer";
import GoUpBtn from "./components/GoUpBtn";
import { productsData } from "./data/products";

const App = () => {
  return (
    <>
      <GoUpBtn />
      <Navbar />
      <Header />
      <HeroSlider />
      <Categories />
      <ProductSlider title="أدوات أخري" products={productsData} />
      <ProductSlider title="مركبات و سيارات" products={productsData} />
      <ProductSlider title="عقارات" products={productsData} />
      <ProductSlider title="موبايلات و تابلت" products={productsData} />
      <Footer />
    </>
  );
};

export default App;
