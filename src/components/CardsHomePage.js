import React from "react";

// icons
import { FaCaretRight } from "react-icons/fa";

// spa
import { Link } from "react-router-dom";

// context

// components
import Cards from "./Cards";

// styles
import styles from "./Cards.module.css";

const CardsHomePage = () => {
  return (
    <div className={styles.main_cards}>
      <div className={styles.titr_cards}>
        <ul>
          <li>
            <h2>The latest courses</h2>
          </li>
          <li>
            <Link to="/courses">More</Link>
            <FaCaretRight />
          </li>
        </ul>
      </div>
      <Cards />
    </div>
  );
};

export default CardsHomePage;
