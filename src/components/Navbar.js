import React from "react";

// spa
import { Link } from "react-router-dom";

// img
import logo from "../img/logo-100-50.png";

// icons
import { FaShoppingBasket, FaSignInAlt } from "react-icons/fa";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.main}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={styles.menu_nav}>
        <ul className={styles.menu_ul}>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.login_cart}>
        <div className={styles.login}>
          <span>Login</span>
          <span>
            <FaSignInAlt />
          </span>
        </div>
        <div className={styles.cart}>
          <span>
            <FaShoppingBasket />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
