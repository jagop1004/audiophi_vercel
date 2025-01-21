import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter,FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";
//css
import '../../css/footer.css'

function Footer() {
  return (
    <div className="footerContainer">
      <img className="footerContainer__logo" 
        src={"/resources/logo.png"}/>
      <div className="footerContainer__socialMediaContainer">
        <Link to="https://facebook.com">
          <FaFacebook className="footerContainer__socialMediaContainer__icon"/>
        </Link>
        <Link to="https://twitter.com">
          <FaXTwitter className="footerContainer__socialMediaContainer__icon"/>
        </Link>
        <Link to="https://instagram.com">
          <FaInstagram className="footerContainer__socialMediaContainer__icon"/>
        </Link>
        <Link to="https://youtube.com">
          <FaYoutube className="footerContainer__socialMediaContainer__icon"/>
        </Link>
        <Link to="https://tiktok.com">
          <FaTiktok className="footerContainer__socialMediaContainer__icon"/>
        </Link>
      </div>
      <div className="footerContainer__text">
        <span className="footerContainer__text__brand">© AudioPhi </span> 
        All rights reseved
      </div>
    </div>
  );
}

export default Footer;