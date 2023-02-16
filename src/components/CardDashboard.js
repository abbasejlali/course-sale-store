import React from "react";

// icons
import { FaRegTrashAlt } from "react-icons/fa";

// spa
import { Link } from "react-router-dom";

// styles
import styles from "./CardDashboard.module.css";

// img
import github from "../img/github80.png";

const CardDashboard = ({ data }) => {
  return (
    <div className={styles.cartbox}>
      <img src={github} alt="img_product" />
      <div className={styles.text}>
        <Link to={`/courses/${data.id}`}>{data.title}</Link>
        <span>You have purchased this course</span>
      </div>
    </div>
  );
};

export default CardDashboard;
