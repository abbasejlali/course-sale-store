import React, { useContext } from "react";

// styles
import styles from "./Cartbox.module.css";

// img
import github from "../img/github80.png";

// icons
import { FaRegTrashAlt } from "react-icons/fa";

// Context
import { CartContext } from "../Context/CartContextProvider";
import { Link } from "react-router-dom";

const Cartbox = ({ products }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className={styles.cartbox}>
      <img src={github} alt="img_product" />
      <div className={styles.text}>
        <Link to={`/courses/${products.id}`}>{products.title}</Link>
        <span>{products.price} $</span>
      </div>
      <button
        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: products })}
      >
        <FaRegTrashAlt />{" "}
      </button>
    </div>
  );
};

export default Cartbox;
