import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// styles
import styles from "./CartMain.module.css";

// components
import Cartbox from "./Cartbox.js";

// context
import { CartContext } from "../Context/CartContextProvider";

const CartMain = () => {
  const { state } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className={styles.cart_main}>
      <div className={styles.cart_list_courses}>
        <ul>
          <li>
            <h4>List of courses</h4>
          </li>
        </ul>
        <div className={styles.list_main}>
          {state.selectedItems.length === 0 && navigate("/")}
          {state.selectedItems.length === 0 && (
            <h3 className={styles.h3}>Sorry, your shopping cart is empty!</h3>
          )}
          {state.selectedItems.map((item) => (
            <Cartbox key={item.id} products={item} />
          ))}
        </div>
      </div>
      <div className={styles.cart_cost_courses}>
        <ul>
          <li>
            <h4>Cost of courses</h4>
          </li>
        </ul>
        <div className={styles.cost_main}>
          <div className={styles.cost}>
            <span>total:</span>
            <span>1000 $</span>
          </div>
          <div className={styles.discount_box}>
            <input type="text" placeholder="Discount" />
            <button>Action</button>
          </div>
          <div className={styles.discount_text}>
            <span>Discount:</span>
            <span>0 $</span>
          </div>
          <div className={styles.payable}>
            <span>Payable:</span>
            <span>0 $</span>
          </div>
          <button>Complete Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
