import React, { createContext, useContext, useReducer } from 'react'
import { ACTIONS } from '../../helpers/const';
import { calcSubPrice, calcTotalPrice, getLocalStorage, getProductsCountInCart } from '../../helpers/function';
import { dark } from '@mui/material/styles/createPalette';

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLength: getProductsCountInCart(),
};

const reducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case ACTIONS.GET_CART:
            return {...state, cart: action.payload};
            default:
                return state
    }
}

const CardContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    //! GET
    const getCart = ()=>{
        let cart = getLocalStorage()
        if(!cart){
           localStorage.setItem("cart", JSON.stringify({
            products: [],
            totalPrice: 0,
           })
          );
          cart = {
            products: [],
            totalPrice: 0
         };
        };
        dispatch({
            type: ACTIONS.GET_CART,
            payload: cart,
        })
    };


    //! CREATE
   const addProductToCart = (product)=>{
    console.log(product);
     let cart = getLocalStorage();
     if(!cart){ 
        cart = {
            products: [],
            totalPrice: 0,
        }
     }
     let newProduct = {
        item: product,
        count: 1,
        subPrice: product.price,
     };
     console.log(cart);
     let productToFind = cart.products.filter(
        (elem) => elem.item.id === product.id
      );
      
     if(productToFind.length === 0 ){
        cart.products.push(newProduct)
     }
     else{
        cart.products = cart.products.filter((elem)=>
        elem.item.id !== product.id
        );
     }
     cart.totalPrice = calcTotalPrice(cart.products);
     localStorage.setItem("cart", JSON.stringify(cart))
     dispatch({
        type: ACTIONS.GET_CART,
        payload: cart
     })
   };
   const checkProductInCart = (id) =>{ 
    let cart = getLocalStorage();
    if(cart){
        let newCart = cart.products.filter((elem)=>elem.item.id == id)
        return newCart.length > 0 ? true:false;
    }
   }
   const changeProductCount = (id, count)=>{
    let cart = getLocalStorage()
    cart.products = cart.products.map((elem)=>{
        if(elem.item.id === id){
             elem.count = count;
             elem.subPrice = calcSubPrice(elem);
        }
        return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem("cart", JSON.stringify(cart))
    dispatch({
        type: ACTIONS.GET_CART,
        payload: cart,
    })
   }

       //! DELETE
   const deleProductFromCart = (id)=>{
    let cart = getLocalStorage()
    cart.products = cart.products.filter((elem)=> elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem("cart", JSON.stringify(cart))
    dispatch({
        type: ACTIONS.GET_CART,
        payload: cart,
    })
   };


   const values ={
    addProductToCart,
    cart: state.cart,
    getCart,
    checkProductInCart,
    getProductsCountInCart,
    changeProductCount,
    deleProductFromCart
   };

  return  <cartContext.Provider value={values}>{children}</cartContext.Provider>
  
}

export default CardContextProvider
