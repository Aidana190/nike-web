import React from "react";
import "./homPage.scss";
import logoNike from "./assets/00fd3e4806aebff326f3f408ac718a4e.png";
import cartIcon from "./assets/cart-large-2-svgrepo-com.svg";
import personIcon from "./assets/person-2-svgrepo-com.svg";
import { Link, NavLink } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Badge, IconButton, MenuItem, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useProduct } from "../context/ProductContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Navbar = () => {
  const { likesCount } = useProduct();
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-right-content">
            <NavLink to={"/products"}>
              <a href="">NEW ARRIVAL</a>
            </NavLink>
            <a href="">MEN</a>
            <a href="">WOMEN</a>
            <a href="">KIDS</a>
          </div>
          <div className="header-center-content">
            <NavLink to={"/"}>
              <img style={{ width: 100 }} src={logoNike} alt="" />
            </NavLink>
          </div>
          <div className="header-left-content">
          <IconButton sx={{marginBottom:"13px", marginRight:"12px"}} size="large" color="inherit">
              <Badge badgeContent={likesCount} color="error">
                <FavoriteIcon sx={{color:"white"}} />
              </Badge>
            </IconButton>
          <NavLink to={"/bm"}>
           <BookmarkBorderIcon sx={{color:"white", margin:"0px 20px 0px 0px", width:"27px"}} />
            </NavLink>
          <Link to={"/cart"}>
          <img style={{ width: 25 }} src={cartIcon} alt="" />
          </Link>
            <img style={{ width: 22 }} src={personIcon} alt="" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
