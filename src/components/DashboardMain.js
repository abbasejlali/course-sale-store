import React from "react";

// components
import Footer from "./Footer";
import Navbar from "./Navbar";

// styles
import styles from "./DashboardMain.module.css";

const DashboardMain = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main}></div>
      <Footer />
    </>
  );
};

export default DashboardMain;
