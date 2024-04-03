import React, { createContext, useContext, useState } from "react";

const CelebrationAppContext = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <CelebrationAppContext.Provider
      value={{user, setUser, users, setUsers, loading, setLoading }}
    >
      {children}
    </CelebrationAppContext.Provider>
  );
};

export const useCelebrationAppContext = () => {
  return useContext(CelebrationAppContext);
};
