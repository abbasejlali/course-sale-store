import React from "react";

// spa
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import CommentsMain from "./components/CommentsMain";

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
          </Routes>
        </CommentsContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
