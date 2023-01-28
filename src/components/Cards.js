import React, { useContext } from "react";

// icons

// spa

// context
import { ProductsContext } from "../Context/ProductsContextProvider";

// components
import CardHomePage from "./Card";

// styles
import styles from "./Cards.module.css";

const Cards = () => {
  const products = useContext(ProductsContext);

  return (
    <section>
      <div className={styles.cards}>
        {products.map((item) => (
          <CardHomePage key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
