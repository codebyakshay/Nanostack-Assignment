// src/navigations/AuthNavigation.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyDrawer } from "./DrawerNavigator/Drawer";

export type AuthStackParamList = {
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
