import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { ProductList } from "../components/ProductList";
import { Admin } from "./Admin";
import { EditProduct } from "./EditProduct";
import { Home } from "./Home";
import { Login } from "./Login";
import { SingleProductPage } from "./SingleProductPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/product" element={<ProductList />} />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route path="/product" element={<h2>404 The page Not Found....</h2>} />
      <Route
        path={"/product/:id"}
        element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
