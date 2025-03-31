import React, { createContext, useContext, useState } from "react";

// Create the context
const CartModalContext = createContext();

// Context Provider
export const CartModalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);


  const openCart = () => setIsCartOpen(true);

  const closeCart = () => setIsCartOpen(false);

  return (
    <CartModalContext.Provider value={{ isCartOpen, openCart, closeCart }}>
      {children}
    </CartModalContext.Provider>
  );
};

export const useCartModal = () => {
  return useContext(CartModalContext);
};
