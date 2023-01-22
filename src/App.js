import React from "react";

// spa
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";

// context
import ProductsContextProvider from "./Context/ProductsContextProvider";

function App() {
  return (
    <ProductsContextProvider className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
