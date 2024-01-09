import React from "react";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./product/Product";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="product/:id" element={<Product />} />
          <Route path="home" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
