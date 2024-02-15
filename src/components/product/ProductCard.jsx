import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";

const ProductCard = ({ elem }) => {
  const { deleteProducts } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cards">
      <div onClick={() => setIsOpen(true)} className="cards__card">
        <img style={{ width: 220 }} src={elem.image} alt="" />
        <h2>{elem.title}</h2>
        <p>{elem.price} $</p>
      </div>
      <button onClick={() => deleteProducts(elem.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default ProductCard;
