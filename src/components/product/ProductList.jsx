import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./products.scss";

const ProductList = () => {
  const { getProduct, products } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="list">
      {products.map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default ProductList;
