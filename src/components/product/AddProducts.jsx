import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";

const AddProducts = () => {
  const { addProduct } = useProduct();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: 0,
    image: "",
  });
  console.log(product);
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <>
      <div className="admin-page">
        <input
          onChange={handleInput}
          name="title"
          type="text"
          placeholder="NAME"
        />
        <input
          onChange={handleInput}
          name="price"
          type="text"
          placeholder="PRICE"
        />
        <input
          onChange={handleInput}
          name="image"
          type="text"
          placeholder="IMAGE"
        />

        <button onClick={handleClick} style={{ width: 100, height: 50 }}>
          ADD
        </button>
      </div>
    </>
  );
};

export default AddProducts;
