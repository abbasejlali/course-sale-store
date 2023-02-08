import React, { useContext } from "react";
import firebase from "firebase/app";
import { auth } from "./firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// icons
import { FaSignInAlt } from "react-icons/fa";

// styles
import styles from "./LoginBox.module.css";

// context
import { UserContext } from "../Context/UserContextProvider";

const LoginBox = () => {
  const user = useContext(UserContext);

  return (
    <div className={styles.main}>
      {user ? (
        <h3>You are already logged in</h3>
      ) : (
        <>
          {" "}
          <h3>Register/login in Abbas Ejlali site</h3>
          <button
            onClick={async () =>
              await auth.signInWithRedirect(
                new firebase.auth.GoogleAuthProvider()
              )
            }
          >
            <span>Register or Login</span>
            <FaSignInAlt />{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default LoginBox;
