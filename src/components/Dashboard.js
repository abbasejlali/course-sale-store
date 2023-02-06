import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import {
  FaBarcode,
  FaHome,
  FaRegHeart,
  FaSignInAlt,
  FaUserGraduate,
} from "react-icons/fa";

// styles
import styles from "./Dashboard.module.css";

// firebase
import { auth } from "./firebase";

// context
import { UserContext } from "../Context/UserContextProvider";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const exitHandeler = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <div className={styles.dashboard_main}>
        <div className={styles.dashboard_main_up}>
          <img src={user.photoURL} alt="photoprofile" />
          <h5>{user.bc.displayName}</h5>
          <span>{user.bc.email}</span>
        </div>
        <ul className={styles.dashboard_main_bottom}>
          <li>
            <span>
              <FaHome />
            </span>
            <span>User Accont</span>
          </li>
          <li>
            <span>
              <FaUserGraduate />
            </span>
            <span>My Courses</span>
          </li>
          <li>
            <span>
              <FaBarcode />
            </span>
            <span>license</span>
          </li>
          <li onClick={exitHandeler}>
            <span>
              <FaSignInAlt />
            </span>
            <span>Exit</span>
          </li>
        </ul>
      </div>
      <div className={styles.dashboard_info}>
        <div className={styles.dashboard_useraccont}>
          <h4>Abbas Ejlali</h4>
          <span>
            Do you want to be a programmer? You have come to the right place{" "}
            <FaRegHeart />
          </span>
          <p>
            In the{" "}
            <span style={{ color: "rgb(126, 87, 194) !important" }}></span>
            My Courses section, you can see all the courses you attended and how
            to access them.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
