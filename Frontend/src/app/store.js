import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import checkoutReducer from '../features/checkout/checkoutSlice';

const store = configureStore({
    reducer: {
        auth: authReducer, 
        checkout:checkoutReducer
    },
});

export default store;