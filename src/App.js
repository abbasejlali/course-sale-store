import React from "react";

// spa
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";

// context
import ProductsContextProvider from "./Context/ProductsContextProvider";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </ProductsContextProvider>
    </>
  );
}

export default App;
