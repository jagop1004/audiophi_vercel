import React from "react";
//css
import "../../css/description.css"

function Description() {
  return (
    <div className="descriptionContainer">
      <div className="descriptionContainer__title">ABOUT US</div>
      <div className="descriptionContainer__secondContainer">
          <div className="descriptionContainer__secondContainer__thirdContainer">
              <div className="descriptionContainer__secondContainer__thirdContainer__title">Immerse Yourself in Pure Sound.</div>
              <div className="descriptionContainer__secondContainer__thirdContainer__mainText">At AudioPhi, we are passionate about delivering the highest-quality audio experience for true audiophiles. Our curated selection of premium headphones combines cutting-edge technology with expert craftsmanship, offering unmatched clarity, depth, and precision in every note. Whether you're a music enthusiast or a professional sound engineer, we provide the tools you need to elevate your listening experience to an entirely new level. Dive into the world of exceptional sound with AudioPhi where every detail matters.</div>
          </div>
          <div>
              <img className="descriptionContainer__secondContainer__image" src="/resources/aboutUsSecondImage.jpg"></img>
          </div>
      </div>
    </div>
  );
}

export default Description;
