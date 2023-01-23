import React from "react";

// icons
import { FaCaretRight, FaRegClock, FaUserGraduate } from "react-icons/fa";

// spa
import { Link } from "react-router-dom";

// styles
import styles from "./CardHomePage.module.css";

// img
import github from "../img/github.png";

const CardHomePage = (props) => {
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
        <Link to="/">Buy</Link>
        <div>
          <Link to="/courses/">View course</Link>
          <FaCaretRight />
        </div>
      </div>
    </div>
  );
};

export default CardHomePage;
