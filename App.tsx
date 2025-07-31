// App.tsx
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigations/AuthNavigation";
import LocalNavigation from "./src/navigations/LocalNavigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    LexendDecaVariable: require("./assets/font/LexendDeca-VariableFont_wght.ttf"),
    LatoBlack: require("./assets/font/Lato-Black.ttf"),
    LatoBold: require("./assets/font/Lato-Bold.ttf"),
    LatoLight: require("./assets/font/Lato-Light.ttf"),
    LatoRegular: require("./assets/font/Lato-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LocalNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
