import React, { useContext, useState } from "react";

// Components
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

// styles
import styles from "./Cards.module.css";
import styles1 from "./Courses.module.css";

// context
import { ProductsContext } from "../Context/ProductsContextProvider";

// components
import Card from "./Card";

// spa
import { CartContext } from "../Context/CartContextProvider";

const Courses = (props) => {
  const products = useContext(ProductsContext);

  const [check, setCheck] = useState(false);
  const { state } = useContext(CartContext);

  const clickHandeler = () => {
    setCheck(!check);
  };
  return (
    <div>
      {console.log(state.purchased_products)}
      <Navbar />
      <div
        className={styles.main_cards}
        style={{ margin: "80px auto 180px auto" }}
      >
        <div className={styles.titr_cards}>
          {/* create by abbas ejlali */}
          <ul>
            <li>
              <h2>Programming Training Courses</h2>
            </li>
            <li className={styles.li_checkout}>
              <span>Free Courses</span>
              <div className={styles1.checkbox_wrapper_20}>
                <div className={styles1.switch}>
                  <input
                    id="one-20"
                    className={styles1.input}
                    type="checkbox"
                    onClick={clickHandeler}
                  />
                  <label for="one-20" className={styles1.slider}></label>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {check && (
          <div className={styles.cards}>
            <Card data={products[6]} />
          </div>
        )}
        {!check && <Cards />}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
