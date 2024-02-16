import React from "react";
import sneakers from "./assets/360.png";
import { NavLink } from "react-router-dom";

const ShowProduct = () => {
  return (
    <>
      <div className="show-product">
        <div className="show-product__left-content">
          <img src={sneakers} alt="" />
        </div>
        <div className="show-product__right-content">
          <div className="show-product-right-content__title">
            <h2>
              AIR JORDAN 1 <br /> RETRO RIGH OG
            </h2>
          </div>
          <div className="show-product-right-content__description">
            <p>$275</p>
            <NavLink to={"/products"}>
              <button>More Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
