import React from "react";
//css
import "../../css/mainImage.css"

function MainImage({imgSrc}) {
  return (
    <div className="mainImageContainer">
        <img className="mainImageContainer__image" src={imgSrc}/>
    </div>
  );
}

export default MainImage;
