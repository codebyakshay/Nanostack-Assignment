// src/navigations/LocalNavigation.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/LoginScreen/Login";
import TermsOfUse from "../screens/TermsOfUseScreen/TermsOfUse";
import PrivacyPolicy from "../screens/PrivacyPolicyScreen/PrivacyPolicy";
import CustomerLogin from "../screens/CustomerLoginScreen/CustomerLogin";

export type LocalStackParamList = {
  Login: undefined;
  TermsOfUser: undefined;
  PrivacyPolicy: undefined;
  CustomerLogin: undefined;
};

const Stack = createNativeStackNavigator<LocalStackParamList>();

export default function LocalNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="TermsOfUser" component={TermsOfUse} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
    </Stack.Navigator>
  );
}
