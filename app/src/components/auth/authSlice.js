import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  authenticateUser,
  updateUser,
  logoutUser,
} from "./authAPI";

const initialState = {
  loggedUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const logoutUserAsync = createAsyncThunk(
  "user/logoutUser",
  async (userID) => {
    const response = await logoutUser(userID);
    return response.data;
  }
);

export const authenticateUserAsync = createAsyncThunk(
  "user/authenticateUser",
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await authenticateUser(loginInfo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = action.payload;
      })
      .addCase(authenticateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authenticateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = action.payload;
      })
      .addCase(authenticateUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = null;
      });
  },
});

export const selectLoggedUser = (state) => state.auth.loggedUser;
export const selectError = (state) => state.auth.error;
export const selectAuthStatus = (state) => state.auth.status;
export default authSlice.reducer;
