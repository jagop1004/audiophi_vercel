import React from "react";
import { Link } from "react-router-dom";
//css
import "../../css/info.css"

function Info() {
  return (
    <div className="infoContainer">
        <div className="infoContainer__slogan">Experience Sound Like <span className="infoContainer__slogan__emphasize">Never</span> Before.</div>
        <p className="infoContainer__description">Discover a new level of audio excellence with our <span className="infoContainer__description__emphasize">premium headphones</span>, designed to deliver crystal-clear sound, deep bass, and an immersive listening experience.</p>
        <Link to="/about-us" className="infoContainer__button infoContainer__button--hover">
            MORE ABOUT US
        </Link>
    </div>
  );
}

export default Info;
