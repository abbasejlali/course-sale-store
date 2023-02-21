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
        <div>
          <h3>{data.title}</h3>
          <span>To view course, refer to the course page.</span>
        </div>
        <Link to={`/courses/${data.id}`}>View Course</Link>
      </div>
    </div>
  );
};

export default CardDashboard;
