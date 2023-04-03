import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "", email: "" },
    uid: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.uid = "";
      });
  },
});

export const authReducer = authSlice.reducer;
