import React, { useState } from "react";

// spa
import { Link } from "react-router-dom";

// img
import logo from "../img/logo-100-50.png";

// icons
import {
  FaBars,
  FaComments,
  FaHome,
  FaShoppingBasket,
  FaSignInAlt,
  FaTimes,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menu_mobile, setMenu_mobile] = useState(false);

  const clickHandler = (e) => {
    setMenu_mobile(!menu_mobile);
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.menu_icon_mobile} onClick={clickHandler}>
          <FaBars />
        </div>
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
      {menu_mobile && (
        <section className={styles.menu_bar}>
          <div className={styles.menu_section}>
            <div onClick={clickHandler}>
              <FaTimes />
            </div>
            <ul>
              <li>
                <FaHome />
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <FaUserGraduate />
                <Link to="/course">Courses</Link>
              </li>
              <li>
                <FaComments />
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <FaUserTie />
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
