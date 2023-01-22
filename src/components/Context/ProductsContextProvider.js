import React, { useEffect, useState } from "react";

const ProductsContextProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      title: "Next JS course",
      clock: 40,
      number: 178,
      price: 600,
    },
    {
      id: 2,
      title: "TypeScript course",
      clock: 25,
      number: 246,
      price: 490,
    },
    {
      id: 3,
      title: "NodeJs course",
      clock: 50,
      number: 681,
      price: 690,
    },
    {
      id: 4,
      title: "ReactJs course",
      clock: 40,
      number: 2000,
      price: 850,
    },
    {
      id: 5,
      title: "JavaScript course",
      clock: 25,
      number: 2817,
      price: 390,
    },
    {
      id: 6,
      title: "Html and Css course",
      clock: 17,
      number: 2600,
      price: 150,
    },
    {
      id: 7,
      title: "Sass course",
      clock: 3,
      number: 4800,
      price: "free",
    },
    {
      id: 8,
      title: "Git and Githab course",
      clock: 3,
      number: 2112,
      price: 99,
    },
  ];

  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data);
  }, []);

  const ProductsContext = React.createContext();
  return (
    <div>
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsContextProvider;
