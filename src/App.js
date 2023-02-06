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

// context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CommentsContextProvider from "./Context/CommentsContextProvider";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <ProductsContextProvider>
          <CommentsContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/comments" element={<CommentsMain />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<DashboardMain />} />
            </Routes>
          </CommentsContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
