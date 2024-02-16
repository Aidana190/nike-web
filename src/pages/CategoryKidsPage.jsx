import React, { useEffect } from "react";
import { useProduct } from "../components/context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const CategoryKidsPage = () => {
  const { getProduct, products } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container3">
      <h2>FOR KIDS</h2>
      <div className="pagesCard">
        {products.map(
          (elem) =>
            elem.category === "kids" && (
              <div key={elem.id} className="pagseCard__card">
                <div className="pagesCard__content">
                  <img style={{ width: 190 }} src={elem.image} alt="" />
                  <h2>{elem.title}</h2>
                  <p>{elem.price} $</p>
                </div>
                <button>DELETE</button>
                <button>EDIT</button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CategoryKidsPage;
