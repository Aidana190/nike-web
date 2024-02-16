import React from "react";
import titleBg from "./assets/Labels.png";
import title from "./assets/Title.png";
import sneakers from "./assets/ezgif 2.png";
import woman from "./assets/Women.png";
import kids from "./assets/Kids.png";
import men from "./assets/Men.png";
import { NavLink } from "react-router-dom";

const Title = () => {
  return (
    <>
      <div className="about">
        <img src={titleBg} alt="" />
        <div className="about-website">
          <div className="about-website__title">
            <img src={title} alt="" />
          </div>
          <div className="about-website-title__description">
            <p>
              In terms of footwear, we are the first in Canada to have opened
              not simple "shops" but real company outlets that offer the same
              service as the artisan <br /> shops of yesteryear: this to make
              you go without fail every time you want to buy a pair of handmade
              genuine leather shoes. Without fear of making <br /> mistakes and
              with the certainty that you will be able to wear them comfortably
              from the beginning. <br />
              Are you also curious to find out why hundreds of people choose us
              every day?
            </p>
            <button>Found Out More</button>
          </div>
        </div>
        <img id="skeakers" src={sneakers} alt="" />
        <div className="topSelling">
          <div className="topSelling__title">
            <h2>BEST SELLERS</h2>
          </div>
          <div className="topSelling__category">
            <NavLink to={"/woman"}>
              <img src={woman} alt="" />
            </NavLink>
            <NavLink to={"/kid"}>
              <img src={kids} alt="" />
            </NavLink>
            <NavLink to={"/mans"}>
              <img src={men} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
