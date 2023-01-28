import React from "react";

// Components
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

// styles
import styles from "./Cards.module.css";

// pa
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div
        className={styles.main_cards}
        style={{ margin: "80px auto 180px auto" }}
      >
        <div className={styles.titr_cards}>
          <ul>
            <li>
              <h2>Programming Training Courses</h2>
            </li>
            <li>
              <span>Free Courses</span>
              <input type="checkbox" />
            </li>
          </ul>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
