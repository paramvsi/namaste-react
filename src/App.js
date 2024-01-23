import React from "react";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./product/Product";
import Page404 from "./components/page-404/Page404";
import RestaurantDetails from "./main/restraunts/restaurant-details/RestaurantDetails";
import { User } from "./user/User";
import Register from "./user/register/Register";
import Login from "./user/login/Login";
import { CartProvider } from "./cart/CardContext";
import Cart from "./cart/Cart";
import Offers from "./offers/Offers";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="restaurant/:id" element={<RestaurantDetails />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="offers" element={<Offers />} />
            <Route path="user" element={<User />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </div>
  );
};
export default App;
