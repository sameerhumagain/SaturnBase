import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
    isRegistered: false,
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    error: null,
    loading: false,
  },

  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("accessToken", action.payload.access);
      localStorage.setItem("refreshToken", action.payload.refresh);
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Login failed";
    });
  },
});

export const { resetError, logout } = authSlice.actions;
export default authSlice.reducer;