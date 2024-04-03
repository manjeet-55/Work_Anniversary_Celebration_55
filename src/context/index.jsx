import React, { createContext, useContext, useState } from "react";

const CelebrationAppContext = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalContribution, setTotalContribution] = useState(0);
  const [totalContributionsThisYear, setTotalContributionsThisYear] =
    useState(0);
  return (
    <CelebrationAppContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        loading,
        setLoading,
        totalContribution,
        setTotalContribution,
        totalContributionsThisYear,
        setTotalContributionsThisYear,
      }}
    >
      {children}
    </CelebrationAppContext.Provider>
  );
};

export const useCelebrationAppContext = () => {
  return useContext(CelebrationAppContext);
};
