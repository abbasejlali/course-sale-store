import React, { useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// spa
import { Link, Navigate, useNavigate } from "react-router-dom";

// styles
import styles from "./CartMain.module.css";

// components
import Cartbox from "./Cartbox.js";

// context
import { CartContext } from "../Context/CartContextProvider";
import { UserContext } from "../Context/UserContextProvider";

// img
import empty_basket from "../img/empty-basket.webp";

const CartMain = () => {
  const { state, dispatch } = useContext(CartContext);
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const not = () => toast.success("asas");

  const [data, setData] = useState("");

  const changeHandeler = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      {state.selectedItems.length === 0 && state.checkout === false && (
        <div className={styles.emptydiv}>
          <h3 className={styles.h3}>Sorry, your shopping cart is empty!</h3>
          <img className={styles.img} src={empty_basket} alt="empty_basket" />
          <Link className={styles.a} to="/courses">
            View courses
          </Link>
        </div>
      )}
      {state.selectedItems.length === 0 && state.checkout === true && (
        <div
          className={styles.list_main}
          style={{
            margin: "200px auto 200px auto",
            maxWidth: "82%",
            width: "100%",
          }}
        >
          <h3 className={styles.h3_success}>
            Congratulations, you have successfully purchased from Abbas Ejlali
            website
          </h3>
          <Link
            style={{ width: "100%", textAlign: "center", margin: "1rem 0" }}
            to="/dashboard"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
      {state.selectedItems.length > 0 && (
        <div className={styles.cart_main}>
          <div className={styles.cart_list_courses}>
            <ul>
              <li>
                <h4>List of courses</h4>
              </li>
            </ul>
            <div className={styles.list_main}>
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
                {data.trim() === "off10" ? <span>10%</span> : <span>0%</span>}
              </div>
              <div className={styles.payable}>
                <span>Payable:</span>
                {data.trim() === "off10" ? (
                  <span>{state.discount} $</span>
                ) : (
                  <span>{state.total} $</span>
                )}
              </div>
              {user ? (
                <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                  Complete Purchase
                </button>
              ) : (
                <Link to="/login">Login To Site</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartMain;
