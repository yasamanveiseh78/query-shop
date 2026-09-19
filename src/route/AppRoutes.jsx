import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Header from "../components/layout/Header/Header";
import { useState } from "react";

function AppRoutes() {
  const [searchText, setSearchText] = useState("");

  return (
    <BrowserRouter>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products searchText={searchText} setSearchText={setSearchText} />
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
