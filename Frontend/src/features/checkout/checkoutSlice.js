import { createSlice } from "@reduxjs/toolkit";

const initialAddressState = {
    first_name: "",
    last_name: "",
    company: "",
    telephone: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zip_code: "",
    tax_vat_number: "",
    fax: ""
};


const initialState = {
    activeStep: 0,
    isBillingFormCompleted: false,
    isShippingFormCompleted: false,
    isShippingMethodCompleted: false,
    isPaymentMethodCompleted:false,
    billingAddressData: { ...initialAddressState },
    sameAsBilling: false,
    shippingAddressData: { ...initialAddressState },
    shippingMethod: "",
    paymentMethod: "",
    errors: {}
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        updateActiveStep: (state, action) => {
            state.activeStep = action.payload
        },
        updateBillingAddress: (state, action) => {
            state.billingAddressData = { ...state.billingAddressData, ...action.payload };
        },
        updateShippingAddress: (state, action) => {
            state.shippingAddressData = { ...state.shippingAddressData, ...action.payload };
        },
        updateShippingMethod: (state, action) => {
            state.shippingMethod = action.payload
            state.isShippingMethodCompleted = true
        },
        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
            state.isPaymentMethodCompleted = true
        },
        toggleSameAsBilling: (state) => {
            state.sameAsBilling = !state.sameAsBilling;

            if (state.sameAsBilling) {
                state.shippingAddressData = { ...state.billingAddressData };
                Object.keys(state.shippingAddressData).forEach((key) => {
                    delete state.errors[key];
                });
            } else {
                state.shippingAddressData = { ...initialAddressState };
            }
        },


        setErrors: (state, action) => {
            state.errors = action.payload
        },
        clearError: (state, action) => {
            const fieldName = action.payload;
            if (state.errors[fieldName]) {
                delete state.errors[fieldName];
            }
        },
        nextStep: (state) => {
            switch (state.activeStep) {
                case 0:
                    state.isBillingFormCompleted = true
                    break;
                case 1:
                    state.isShippingFormCompleted = true
                    break;
                case 2:
                    state.isShippingMethodCompleted = true
                    break;
                case 3:
                    state.isPaymentMethodCompleted = true
                    break;
            }
            console.log(state.isPaymentMethodCompleted)

            state.activeStep += 1
        },
        prevStep: (state) => {
            state.activeStep -= 1;
        }
    }
})

export const { updateActiveStep, updateBillingAddress, updateShippingAddress, updateShippingMethod, updatePaymentMethod, toggleSameAsBilling, setErrors, clearError, nextStep, prevStep } = checkoutSlice.actions;
export default checkoutSlice.reducer;