import React, { createContext, useState, useContext, useCallback } from "react";

const AlertMessageContext = createContext();

export const useAlert = () => {
  return useContext(AlertMessageContext);
};
export const AlertMessageProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [showOnPage, setShowOnPage] = useState("");

  const showAlert = useCallback((options) => {
    const { type, message, page } = options;
    setAlert({ type, message });
    setShowOnPage(page);
    setTimeout(() => {
      setAlert(null);
      setShowOnPage("");
    }, 5000); 
  }, []);

  return (
    <AlertMessageContext.Provider value={{ alert, showAlert, showOnPage }}>
      {children}
    </AlertMessageContext.Provider>
  );
};
