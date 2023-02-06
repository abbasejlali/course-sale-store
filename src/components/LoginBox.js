import React from "react";
import firebase from "firebase/app";
import { auth } from "./firebase";

// icons
import { FaSignInAlt } from "react-icons/fa";

// styles
import styles from "./LoginBox.module.css";

const LoginBox = () => {
  return (
    <div className={styles.main}>
      <h3>Register/login in Abbas Ejlali site</h3>
      <button
        onClick={async () =>
          await auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
      >
        <span>Register or Login</span>
        <FaSignInAlt />{" "}
      </button>
    </div>
  );
};

export default LoginBox;
