import React, { useEffect, useState } from "react";

// img
import github from "../img/github.png";
import HTML from "../img/HTML.png";
import js from "../img/js.png";
import nextjs from "../img/nextjs.png";
import Nodejs from "../img/Nodejs.png";
import REACT from "../img/REACT.png";
import ts from "../img/ts.png";
import sass from "../img/sass.png";

export const ProductsContext = React.createContext();

const ProductsContextProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      title: "Next JS course",
      clock: 40,
      number: 178,
      price: 600,
      img: { nextjs },
    },
    {
      id: 2,
      title: "TypeScript course",
      clock: 25,
      number: 246,
      price: 490,
      img: { ts },
    },
    {
      id: 3,
      title: "NodeJs course",
      clock: 50,
      number: 681,
      price: 690,
      img: { Nodejs },
    },
    {
      id: 4,
      title: "ReactJs course",
      clock: 40,
      number: 2000,
      price: 850,
      img: { REACT },
    },
    {
      id: 5,
      title: "JavaScript course",
      clock: 25,
      number: 2817,
      price: 390,
      img: { js },
    },
    {
      id: 6,
      title: "Html and Css course",
      clock: 17,
      number: 2600,
      price: 150,
      img: { HTML },
    },
    {
      id: 7,
      title: "Sass course",
      clock: 3,
      number: 4800,
      price: 0,
      img: { sass },
    },
    {
      id: 8,
      title: "Git and Githab course",
      clock: 3,
      number: 2112,
      price: 99,
      img: { github },
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const pro = async () => {
      const products = await setProducts(data);
      return products;
    };

    pro();
  }, []);

  return (
    <div>
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsContextProvider;
