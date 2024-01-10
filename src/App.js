import React from "react";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./product/Product";
import Page404 from "./components/page-404/Page404";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="product/:id" element={<Product />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
