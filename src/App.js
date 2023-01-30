import React from "react";

// spa
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import CommentsMain from "./components/CommentsMain";
import AboutUs from "./components/AboutUs";
import LoginBox from "./components/LoginBox";

// context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CommentsContextProvider from "./Context/CommentsContextProvider";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <CommentsContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/comments" element={<CommentsMain />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<LoginBox />} />
          </Routes>
        </CommentsContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
