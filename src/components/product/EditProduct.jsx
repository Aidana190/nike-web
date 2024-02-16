import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const { editProduct, oneProduct, getOneProduct } = useProduct();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    editProduct(id, product);
  };
  useEffect(() => {
    getOneProduct(id);
    // getProduct();
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <>
      <div className="editPage">
        <h2>EDIT PRODUCT</h2>
        <div className="inputs">
          <input
            onChange={handleInput}
            value={product.image}
            name="image"
            label="IMG"
            type="text"
          />
          <input
            onChange={handleInput}
            value={product.title}
            name="title"
            label="IMG"
            type="text"
          />
          <input
            onChange={handleInput}
            value={product.price}
            name="price"
            label="IMG"
            type="text"
          />
          <button onClick={handleClick}>EDIT</button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
