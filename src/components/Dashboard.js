import React from "react";

// icons
import { FaRegHeart } from "react-icons/fa";

// styles
import styles from "./Dashboard.module.css";

// firebase
import { auth } from "./firebase";

const Dashboard = () => {
  const [loding, setLoding] = useState(true);
  const [user, setUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      await setUser(user);
      setLoding(false);
    });
  }, [user]);

  return (
    <>
      <div className={styles.dashboard_main}>
        <div className={styles.dashboard_main_up}>
          {user.multiFactor.photoURL ? (
            <img src={user.multiFactor.photoURL} alt="photoprofile" />
          ) : (
            <div>{user.bc.displayName}</div>
          )}
          <h5>{user.bc.displayName}</h5>
          <span>{user.bc.email}</span>
        </div>
        <div className={styles.dashboard_main_bottom}></div>
      </div>
      <div className={styles.dashboard_useraccont}>
        <h4>Abbas Ejlali</h4>
        <span>
          Do you want to be a programmer? You have come to the right place{" "}
          <FaRegHeart />
        </span>
        <p>
          In the <span style={{ color: "rgb(126, 87, 194) !important" }}></span>
          My Courses section, you can see all the courses you attended and how
          to access them.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
