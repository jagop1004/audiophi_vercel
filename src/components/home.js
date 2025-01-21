import React from "react";
//components
import MainImage from "./general/mainImage";
import Info from "./home/info";
import FeaturedProducts from './home/featuredProducts'

function Home() {
  return (
    <>
      <MainImage imgSrc="/resources/mainImage.jpg"/>
      <Info/>
      <FeaturedProducts/>
    </>
  );
}

export default Home;
