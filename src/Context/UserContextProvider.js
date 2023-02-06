import React, { Children, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

export const UserContext = React.createContext();

const UserContextProvider = ({ Children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setLoading(false);
        if (user) history.push("/dashboard");
      },
      [user]
    );
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        {!loading && Children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
