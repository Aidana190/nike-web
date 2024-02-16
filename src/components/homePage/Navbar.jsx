import React from "react";
import "./homPage.scss";
import logoNike from "./assets/00fd3e4806aebff326f3f408ac718a4e.png";
import cartIcon from "./assets/cart-large-2-svgrepo-com.svg";
import personIcon from "./assets/person-2-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-right-content">
            <NavLink to={"/products"}>
              <a href="">NEW ARRIVAL</a>
            </NavLink>
            <a href="/mans">MEN</a>
            <a href="/woman">WOMEN</a>
            <a href="kid">KIDS</a>
          </div>
          <div className="header-center-content">
            <NavLink to={"/"}>
              <img style={{ width: 100 }} src={logoNike} alt="" />
            </NavLink>
          </div>
          <div className="header-left-content">
            <img style={{ width: 17 }} src={cartIcon} alt="" />
            <img style={{ width: 17 }} src={personIcon} alt="" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
