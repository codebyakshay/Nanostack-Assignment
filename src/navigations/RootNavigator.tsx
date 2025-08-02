import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/feature/Slices/AuthSlice";
import AuthNavigation from "./AuthNavigation";
import LocalNavigation from "./LocalNavigation";

export default function RootNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <AuthNavigation /> : <LocalNavigation />;
}
