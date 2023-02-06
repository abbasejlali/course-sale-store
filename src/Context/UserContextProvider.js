import React, { useEffect, useState } from "react";
import { auth } from "../components/firebase";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

const UserContextProvider = ({ Children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) navigate("/dashboard");
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>{Children}</UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
