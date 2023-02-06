import React from "react";

// components
import Footer from "./Footer";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

// styles
import styles from "./DashboardMain.module.css";

const DashboardMain = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <Dashboard />
      </div>
      <Footer />
    </>
  );
};

export default DashboardMain;
