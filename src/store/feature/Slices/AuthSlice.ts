//src/store/feature/Slices/AuthSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface InitialStateType {
  isAuthenticated: boolean;
}

const initialState: InitialStateType = {
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default AuthSlice.reducer;
