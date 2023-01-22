import React, { useContext } from "react";

// icons
import { FaCaretRight } from "react-icons/fa";

// spa
import { Link } from "react-router-dom";

// context
import { ProductsContext } from "../Context/ProductsContextProvider";

// components
import CardHomePage from "./CardHomePage";

// styles
import styles from "./CardsHomePage.module.css";

const CardsHomePage = () => {
  const products = useContext(ProductsContext);

  return (
    <section className={styles.main_cards}>
      <div className={styles.titr_cards}>
        <ul>
          <li>
            <h4>The latest courses</h4>
          </li>
          <li>
            <Link to="/courses">More</Link>
            <FaCaretRight />
          </li>
        </ul>
      </div>
      <div className={styles.cards}>
        {products.map((product) => (
          <CardHomePage product={product} />
        ))}
        {console.log(products)}
      </div>
    </section>
  );
};

export default CardsHomePage;
