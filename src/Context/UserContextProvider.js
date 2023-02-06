import React, { useEffect, useState } from "react";

import { auth } from "../components/firebase.js";

export const UserContext = React.createContext();

const UserContextProvider = ({ Children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      await setUser(user);
      setLoading(false);
    });
  }, [user]);

  return (
    <div>
      <UserContext.Provider value={user}>{Children}</UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
