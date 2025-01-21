import React from "react";
//components
import MainImage from "./general/mainImage";
import AllProducts from "./products/allProducts";

function Products() {
  return (
    <>
      <MainImage imgSrc="/resources/productsMainImage.jpg"/>
      <AllProducts/>
    </>
  );
}

export default Products;
