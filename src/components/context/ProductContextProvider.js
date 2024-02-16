import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, API_CATEGORIES } from "../../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  category: [],
  likesCount: 0,
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
        case ACTIONS.INCREASE_LIKES:
          return { ...state, likesCount: state.likesCount + 1 };
      case ACTIONS.GET_ONE_PRODUCT:
        return { ...state, oneProduct: action.payload };
      case ACTIONS.GET_CATEGORIES:
        return { ...state, product: action.payload };

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
    const res = await axios(`${API}${window.location.search}`);
    console.log(window.location.search);
    console.log(res);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: res.data,
    });
  };
  // ! DELATE
  const deleteProducts = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };

  
//!likes
const increaseLikes = () => {
  dispatch({ type: ACTIONS.INCREASE_LIKES });
};

  // ! GET_ONE_PRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };
  // ! EDIT
  const editProduct = async (id, editProduct) => {
    await axios.patch(`${API}/${id}`, editProduct);
    navigate("/products");
  };

  // ! CREATE_CATEGORY
  const createCategory = async (newCategory) => {
    await axios.post(API, newCategory);
  };

  //! FILTER
  const fetchByParams = (query, value) => {
    console.log(query, value);
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    console.log(search);
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };
  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    createCategory,
    fetchByParams,
    editProduct,
    getOneProduct,
    deleteProducts,
    addProduct,
    getProduct,
    likesCount: state.likesCount,
    increaseLikes,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
