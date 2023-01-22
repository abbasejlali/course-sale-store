import React from "react";

// spa
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/HomePage";

// context
import ProductsContextProvider from "./Context/ProductsContextProvider";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
