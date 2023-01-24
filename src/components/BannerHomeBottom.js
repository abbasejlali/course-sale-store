import React from "react";

// styles
import styles from "./BannerHomeBottom.module.css";

// img
import banner from "../img/mockup.webp";

const BannerHomeBottom = () => {
  return (
    <div className={styles.banner_main}>
      <h4>
        Click <a href="https://instagram.com/abbas.ejlali1">here</a> to see my
        Instagram page
      </h4>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default BannerHomeBottom;
