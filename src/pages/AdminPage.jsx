import React from "react";
import "./pages.scss";
import AddProducts from "../components/product/AddProducts";
import AddCategory from "../components/product/AddCategory";

const AdminPage = () => {
  return (
    <>
      <AddProducts />
      <AddCategory />
    </>
  );
};

export default AdminPage;
