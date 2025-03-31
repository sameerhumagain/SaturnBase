import React, { createContext, useContext, useState } from 'react';
import Toast from './Toast';

// Create a context for the toast
const ToastContext = createContext();

// Custom hook to use the Toast context
export const useToast = () => useContext(ToastContext);

// Provider component to wrap around your app
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  // Function to show toast messages
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null); 
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};
