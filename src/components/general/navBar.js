import React from "react";
import { Link } from "react-router-dom";
//css
import '../../css/navBar.css'

function NavBar() {
  return (
    <div className="navBarContainer">
      <Link className="navBarContainer__logoContainer">
        <img className="navBarContainer__logoContainer__logo" 
          src={"/resources/logo.png"}/>
      </Link>
      <div className="navBarContainer__linkContainer">
        <Link className="navBarContainer__linkContainer__link navBarContainer__linkContainer__link--hover"
          to="/products"
          >PRODUCTS
        </Link>
        <Link className="navBarContainer__linkContainer__link navBarContainer__linkContainer__link--hover"
          to="/about-us"
          >ABOUT US
        </Link>
        <Link className="navBarContainer__linkContainer__link navBarContainer__linkContainer__link--hover"
          to="/support"
          >SUPPORT
        </Link>
      </div>
    </div>
  );
}

export default NavBar;