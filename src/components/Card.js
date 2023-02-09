import React, { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// icons
import { FaCaretRight, FaRegClock, FaUserGraduate } from "react-icons/fa";

// spa
import { Link } from "react-router-dom";

// styles
import styles from "./Card.module.css";

// img
import github from "../img/github80.png";

// context
import { CartContext } from "../Context/CartContextProvider";

// Function
import { ProductTF } from "../helper/function";

const Card = (props) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.card_main}>
      <img src={github} alt="img_product" />
      <h2>{props.data.title}</h2>
      <div className={styles.card_clock}>
        <FaRegClock />
        <span>{props.data.clock} hours</span>
      </div>
      <div className={styles.card_price_number}>
        <div className={styles.card_number}>
          <FaUserGraduate />
          <span>{props.data.number} people</span>
        </div>
        <span className={styles.card_price}>{props.data.price} $</span>
      </div>
      <div className={styles.card_buy}>
        {ProductTF(state, props.data.id) ? (
          <button>continew buy</button>
        ) : (
          <Link
            onClick={() => dispatch({ type: "ADD_ITEM", payload: props.data })}
          >
            Buy
          </Link>
        )}
        {ProductTF(state, props.data.id)
          ? console.log("true")
          : console.log("false")}
        <div>
          <Link to="/courses/">View course</Link>
          <FaCaretRight />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
