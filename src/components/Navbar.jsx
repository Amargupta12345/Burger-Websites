import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav.active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="loading" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={2000}>
            Header
          </Link>
        </li>
        <li>
          <Link to="dishList" smooth={true} duration={2000}>
            DishList
          </Link>
        </li>
        <li>
          <Link to="storelocator" smooth={true} duration={2000}>
            Store Locator
          </Link>
        </li>
        <li>
          <Link to="products" smooth={true} duration={2000}>
            Products
          </Link>
        </li>
        <li>
          <Link to="blogs" smooth={true} duration={2000}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={2000}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={2000}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
