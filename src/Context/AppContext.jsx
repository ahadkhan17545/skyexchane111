import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ selectedData, setSelectedData, loginOpen, setLoginOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};
