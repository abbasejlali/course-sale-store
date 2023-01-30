import React from "react";

// Components
import Footer from "./Footer";
import LoginBox from "./LoginBox";
import Navbar from "./Navbar";

// styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.loginbox}>
        <LoginBox />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
