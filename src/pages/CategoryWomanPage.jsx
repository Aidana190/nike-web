import React, { useEffect } from "react";
import { useProduct } from "../components/context/ProductContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./pages.scss";

const CategoryWomanPage = () => {
  const { getProduct, products, deleteProducts } = useProduct();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container3">
      <h2>FOR WOMAN</h2>
      <div className="pagesCard">
        {products.map(
          (elem) =>
            elem.category === "woman" && (
              <div key={elem.id} className="pagseCard__card">
                <div className="pagesCard__content">
                  <img style={{ width: 190 }} src={elem.image} alt="" />
                  <h2>{elem.title}</h2>
                  <p>{elem.price} $</p>
                </div>
                <button onClick={() => deleteProducts(elem.id)}>DELETE</button>
                <button onClick={() => navigate(`/edit/${elem.id}`)}>
                  EDIT
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CategoryWomanPage;
