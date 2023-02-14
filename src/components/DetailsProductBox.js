import React, { useContext } from "react";

// spa
import { useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../Context/ProductsContextProvider";

// img
import github from "../img/github80.png";

const DetailsProductBox = () => {
  const params = useParams();
  const idMain = params.id - 1;

  const product = useContext(ProductsContext);
  const { id, title, clock, number, price, describtion } = product[idMain];

  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default DetailsProductBox;
