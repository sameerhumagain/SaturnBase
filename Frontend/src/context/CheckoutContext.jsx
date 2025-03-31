import React, { act, createContext, useContext, useState } from "react";

// Create the context
const CheckoutContext = createContext();

// Context Provider
export const CheckoutFormProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  const [billingFormData, setBillingFormData] = useState({
    first_name:"",
    last_name:"",
    company:"",
    telephone:"",
    address:"",
    country:"",
    city:"",
    state:"",
    zip_code:"",
    tax_vat_number:"",
    fax:""
});


  const context = {
    activeStep,
    setActiveStep,
  };
  return (
    <CheckoutContext.Provider value={context}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
