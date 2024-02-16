import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./products.scss";

import CategoryManPage from "../../pages/CategoryManPage";
import { Box, Pagination } from "@mui/material";

const ProductList = () => {
  const { getProduct, products } = useProduct();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setPage(1);
    getProduct();
  }, [searchParams]);

  // const [page, setPage] = useState(1);
  // const itemPerPage = 3;
  // const count = Math.ceil(products.length / itemPerPage);
  // console.log(count);
  // console.log(products);
  // const currentData = () => {
  //   const begin = (page - 1) * itemPerPage;
  //   const end = begin + itemPerPage;
  //   return products.slice(begin, end);
  // };
  // const handlechange = (e, value) => {
  //   setPage(value, e);
  // };
  // console.log(currentData());
  return (
    <div className="container-cards">
      <span>PRODUCTS</span>
      <div className="list">
        {products.map((elem) => (
          <Box key={elem.id} sx={{}}>
            <ProductCard elem={elem} />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
