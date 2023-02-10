import React, { useContext, useEffect, useState } from "react";

// toast package

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// spa
import { useNavigate } from "react-router-dom";

// styles
import styles from "./CartMain.module.css";

// components
import Cartbox from "./Cartbox.js";

// context
import { CartContext } from "../Context/CartContextProvider";

const CartMain = () => {
  const { state, dispatch } = useContext(CartContext);
  const notify = () => toast("Wow so easy!");

  const [data, setData] = useState("");
  const changeHandeler = (e) => {
    setData(e.target.value);
  };
  return (
    <div className={styles.cart_main}>
      <div className={styles.cart_list_courses}>
        <ul>
          <li>
            <h4>List of courses</h4>
          </li>
        </ul>
        <div className={styles.list_main}>
          {/* {state.selectedItems.length === 0 && navigate("/")} */}
          {state.selectedItems.length === 0 && state.checkout === false && (
            <h3 className={styles.h3}>Sorry, your shopping cart is empty!</h3>
          )}
          {state.checkout && (
            <h3 className={styles.h3_success}>
              Congratulations, you have successfully purchased from Abbas Ejlali
              website
            </h3>
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
            <span>{state.total} $</span>
          </div>
          <div className={styles.discount_box}>
            <input
              type="text"
              value={data}
              placeholder="Discount"
              onChange={changeHandeler}
            />
            {data.trim() === "off10" ? (
              <button onClick={() => dispatch({ type: "DISCOUNT" })}>
                Action
              </button>
            ) : (
              <button>Action</button>
            )}
          </div>
          <div className={styles.discount_text}>
            <span>Discount:</span>
            {state.discount === 0 && <span>0</span>}
            {state.discount > 0 && <span>10%</span>}
          </div>
          <div className={styles.payable}>
            <span>Payable:</span>
            <span>{state.discount} $</span>
          </div>
          <button onClick={() => dispatch({ type: "CHECKOUT" })}>
            Complete Purchase
          </button>
          {state.checkout && console.log("yessss")}
          {notify}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CartMain;
