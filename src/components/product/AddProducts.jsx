import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";

const AddProducts = () => {
  const { addProduct, createCategory } = useProduct();
  const [category, setCategory] = useState();

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
    if (!product.title && !product.price && !product.image) {
      alert("Please fill in all fields.");
      return;
    }
    addProduct(product);
  };
  // ? category
  // const handleClick1 = () => {
  //   if (!category) {
  //     alert("check");
  //     return;
  //   } else {
  //     const newCategory = {
  //       name: category,
  //     };
  //     createCategory(newCategory);
  //     setCategory("");
  //   }
  // };
  // const mainHandleClick = () => {
  //   handleClick();
  //   handleClick1();
  // };
  return (
    <>
      <div className="container-adminPage">
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
            type="select"
            name="category"
            placeholder="CATEGORY"
            onChange={handleInput}
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
      </div>
    </>
  );
};

export default AddProducts;
