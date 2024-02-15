import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  category: [],
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! CREATE
  const addProduct = async (product) => {
    await axios.post(API, product);
    navigate("/products");
  };
  // ! GET
  const getProduct = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    console.log(window.location.search);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // ! DELATE
  const deleteProducts = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };
  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    deleteProducts,
    addProduct,
    getProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
