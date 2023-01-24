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
            <h2>The latest courses</h2>
          </li>
          <li>
            <Link to="/courses">More</Link>
            <FaCaretRight />
          </li>
        </ul>
      </div>
      <div className={styles.cards}>
        {products.map((item) => (
          <CardHomePage key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CardsHomePage;
