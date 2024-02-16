import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ProductCard = ({ elem }) => {
  const { deleteProducts } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
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
