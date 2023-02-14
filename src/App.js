import React from "react";

// spa
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import CommentsMain from "./components/CommentsMain";
import AboutUs from "./components/AboutUs";
import DashboardMain from "./components/DashboardMain";
import Login from "./components/Login";
import Cart from "./components/Cart";
import DetailsProduct from "./components/DetailsProduct";

// context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CommentsContextProvider from "./Context/CommentsContextProvider";
import UserContextProvider from "./Context/UserContextProvider";
import CartContextProvider from "./Context/CartContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <ProductsContextProvider>
            <CommentsContextProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/id" element={<DetailsProduct />} />
                <Route path="/comments" element={<CommentsMain />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardMain />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </CommentsContextProvider>
          </ProductsContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
