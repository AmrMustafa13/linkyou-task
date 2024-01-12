import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Categories from "./components/Categories";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSlider />
      <Categories />
    </>
  );
};

export default App;
