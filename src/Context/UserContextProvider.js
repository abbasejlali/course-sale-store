import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// firebase
import { auth } from "../components/firebase.js";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      await setUser(user);
      setLoading(false);
      if (user) navigate("/");
    });
  }, [user]);

  return (
    <div>
      <UserContext.Provider value={user}>
        {!loading && children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
