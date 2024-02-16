import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import sneakers2 from "./assets/Group 2.png";

const Smeakers = () => {
  const { products, getProduct } = useProduct();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="sneakers">
        <div className="products-container">
          {products.map((elem) => (
            <div key={elem.id} className="products-container__card">
              <img style={{ width: 220 }} src={elem.image} alt="" />
              <h2>{elem.title}</h2>
              <p>{elem.price}$</p>
            </div>
          ))}
        </div>
        <NavLink to={"/products"}>
          <button>Lets Discover More</button>
        </NavLink>
      </div>

      <div className="modernShoes-container">
        <div className="modernShoes__rightContent">
          <img src={sneakers2} alt="" />
        </div>
        <div className="moderShoes__leftContent">
          <h3>
            WE PROVIDE MODERN <br />
            SHOES
          </h3>
          <p>
            Design for the way you live your life. Atoms are beautiful in their{" "}
            <br />
            simplicity, supporting your feet with absolute comfort.
          </p>
        </div>
      </div>
    </>
  );
};

export default Smeakers;
