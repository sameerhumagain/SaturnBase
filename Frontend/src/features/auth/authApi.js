// api/authApi.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import createAxiosInstance from "../../api/axiosInstance";

const axiosInstance = createAxiosInstance();

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("user/login/", userCredentials);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          return rejectWithValue("Invalid credentials");
        }
        if (error.response.status === 400) {
          return rejectWithValue("Invalid Credentials");
        }
        return rejectWithValue(
          error.response?.data?.message || "Something went wrong, please try again."
        );
      }
      return rejectWithValue("Network error, please try again later.");
    }
  }
);
