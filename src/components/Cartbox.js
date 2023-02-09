import React from "react";

// srtyles
import styles from "./Cartbox.module.css";

// img
import github from "../img/github.png";

// icons
import { FaRegTrashAlt } from "react-icons/fa";

const Cartbox = ({ products }) => {
  return (
    <div className={styles.cartbox}>
      <img src={github} alt="img_product" />
      <div className={styles.text}>
        <h3>{products.title}</h3>
        <span>{products.price} $</span>
      </div>
      <button>
        <FaRegTrashAlt />{" "}
      </button>
    </div>
  );
};

export default Cartbox;
