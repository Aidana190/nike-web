import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { CardActions, IconButton, Typography,  } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../context/CartContextProvider";
import { useBM } from "../context/BMProvider";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ProductCard = ({ elem , onFavoriteClick  }) => {
  const { deleteProducts, increaseLikes  } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  const {addProductToCart, checkProductInCart,} = useCart()
  const { addPostToBookmarks, checkPostInBm } = useBM();
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Получаем значение из localStorage при монтировании компонента
    const storedLikes = localStorage.getItem(`likes_${elem.id}`);
    setIsFavorite(storedLikes === "true");
  }, [elem.id]);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleLikeClick = () => {
    increaseLikes();

    // Сохраняем значение лайка в localStorage
    localStorage.setItem(`likes_${elem.id}`, !isFavorite);
  };


  return (
    <div className="cards">
      <div onClick={() => setIsOpen(true)} className="cards__card">
        <img style={{ width: 220 }} src={elem.image} alt="" />
        <h2>{elem.title}</h2>
        <p>{elem.price} $</p>
        <div style={{marginBottom:"5px"}}>
        <IconButton
          >
            <BookmarkBorderIcon sx={{
              color: checkPostInBm(elem.id) ? "black" : "",
              color: checkPostInBm(elem.id) ? "red" : "inherit", // изменение цвета иконки
            }}
            onClick={() => addPostToBookmarks(elem)} />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              handleClick();
              handleLikeClick();
            }}
          >
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
        <IconButton sx={{marginBottom:"20px"}}>
          <Link to={'/comments'}>
            <CommentIcon sx={{color:"white"}}/>
          </Link>
          </IconButton>
      </div>
      <button onClick={() => deleteProducts(elem.id)}>Delete</button>
      <button>Edit</button>
      <IconButton sx={{marginBottom:"20px"}}>
          <AddShoppingCart sx={{backgroundColor: checkProductInCart(elem.id) ? "black" : "", 
         color: checkProductInCart(elem.id)? "white": "",}}
          onClick={()=> addProductToCart(elem)}/>
         </IconButton>
    </div>
  const navigate = useNavigate();

  return (
    <>
      <div className="cards">
        <div onClick={() => setIsOpen(true)} className="cards__card">
          <img style={{ width: 180 }} src={elem.image} alt="" />
          <h2>{elem.title}</h2>
          <p>{elem.price} $</p>
        </div>
        <button onClick={() => deleteProducts(elem.id)}>Delete</button>
        <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
      </div>
    </>
  );
};

export default ProductCard;
