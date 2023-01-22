import React from "react";

// styles
import styles from "./Banner.module.css";

// spa
import { Link } from "react-router-dom";

// icons
import { FaCaretRight } from "react-icons/fa";

// img
import banner from "../img/banner.webp";

const Banner = () => {
  return (
    <section className={styles.benner}>
      <div className={styles.titr}>
        <h1>Programming training with Abbas Ejlali</h1>
        <p>
          Targeted training, central and comprehensive programming project with
          constant support is part of the educational standards of Abbas Ejlali
          site, which will undoubtedly make you enter the market.
        </p>
        <div className={styles.buttons_titr}>
          <div className={styles.button_courses}>
            <Link to="/courses">View Courses</Link>
            <FaCaretRight />
          </div>
          <Link to="/comments">Students Comments</Link>
        </div>
      </div>
      <img src={banner} alt="banner" />
    </section>
  );
};

export default Banner;
