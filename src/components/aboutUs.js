import React from "react";
//component
import MainImage from "./general/mainImage"
import Description from "./aboutUs/description";
import Values from "./aboutUs/values";

function AboutUs() {
  return (
    <>
        <MainImage imgSrc="/resources/aboutUs.jpg"/>
        <Description/>
        <Values/>
    </>
  );
}

export default AboutUs;
