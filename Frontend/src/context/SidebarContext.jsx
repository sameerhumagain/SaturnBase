import React, { createContext, useContext, useState, useEffect } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  // Default to hidden/minimized on mobile, expanded on desktop
  const [isSideBarHidden, setIsSideBarHidden] = useState(window.innerWidth < 1024);

  // Handle window resize to set appropriate default state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSideBarHidden(true); // Default to minimized on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarMinimize = () => {
    setIsSideBarHidden(!isSideBarHidden);
  };

  return (
    <SidebarContext.Provider value={{ isSideBarHidden, handleSidebarMinimize }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};