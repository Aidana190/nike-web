
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './components/context/ProductContextProvider';
import AuthContextProvider from './components/context/AuthContextProvider';
import CartContextProvider from './components/context/CartContextProvider';
import BMProvider from './components/context/BMProvider';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <AuthContextProvider>
      <CartContextProvider>
        <BMProvider>
        <App />
        </BMProvider>
      </CartContextProvider>
      </AuthContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
