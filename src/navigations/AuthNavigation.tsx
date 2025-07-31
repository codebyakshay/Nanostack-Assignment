// src/navigations/AuthNavigation.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/LoginScreen/Login";
import Dashboard from "../screens/DashboardScreen/Dashboard";

export type AuthStackParamList = {
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
