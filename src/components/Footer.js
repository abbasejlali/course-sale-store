import React from "react";

// styles
import styles from "./Footer.module.css";

// img
import paypal from "../img/Paypalpng.parspng.com_.png";
import logosite from "../img/logo-100-50.png";

// spa
import { Link } from "react-router-dom";

// icons
import {
  FaBtc,
  FaCcVisa,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPaypal,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_left}>
          <div className={styles.child_one}>
            <a href="https://www.abbas-ejlali.ir">
              <img src={logosite} alt="logogsite" />
            </a>
            <div>
              <h2>Abbas Ejlali site</h2>
              <span>
                Clean Coding | Pastest Possible Time | Permanent Support |
                Professional Programming
              </span>
            </div>
          </div>
          <div className={styles.child_two}>
            <p>
              The fate of the times turned out to push me towards programming
              and becoming a programmer, and being a programmer is an issue that
              really satisfies me in every way, and I can boldly say that
              choosing a programming job is one of the best decisions of my
              life. I was and am currently doing programming as a React
              developer and I am very happy that God put me on this path.
            </p>
          </div>
        </div>
        <div className={styles.footer_content_right}>
          <div className={styles.child_one}>
            <h4>Sections Site</h4>
            <ul>
              <li>
                <Link to="/Courses">Courses</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
            </ul>
            <div>
              <a href="abbas.ejlali18@gmail.com">
                <FaEnvelope />{" "}
              </a>
              <a href="https://github.com/abbasejlali">
                <FaGithub />{" "}
              </a>
              <a href="abbas.ejlali18@gmail.com">
                <FaTelegramPlane />{" "}
              </a>
              <a href="https://instagram.com/abbas.ejlali1">
                <FaInstagram />{" "}
              </a>
            </div>
          </div>
          <div className={styles.child_two}>
            <h4>Secure Payment</h4>
            <div>
              <a href="#">
                <FaPaypal />
              </a>
              <a href="#">
                <FaCcVisa />
              </a>
              <a href="#">
                <FaBtc />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <h4>
          Made with ❤️ by{" "}
          <a href="https://www.abbas-ejlali.ir" target="_blank">
            Abbas Ejlali
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
