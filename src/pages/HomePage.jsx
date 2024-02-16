import React from "react";
import ShowProduct from "../components/homePage/ShowProduct";
import Title from "../components/homePage/Title";
import SportsTime from "../components/homePage/SportsTime";
import Smeakers from "../components/homePage/Smeakers";

const HomePage = () => {
  return (
    <div>
      <ShowProduct />
      <Title />
      <SportsTime />
      <Smeakers />
    </div>
  );
};

export default HomePage;
