// App.tsx
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigations/RootNavigator";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/store/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    //
    LexendDecaVariable: require("./assets/font/LexendDeca-VariableFont_wght.ttf"),

    //
    LatoBlack: require("./assets/font/Lato-Black.ttf"),
    LatoBold: require("./assets/font/Lato-Bold.ttf"),
    LatoLight: require("./assets/font/Lato-Light.ttf"),
    LatoRegular: require("./assets/font/Lato-Regular.ttf"),

    //
    PoppinsSemiBold: require("./assets/font/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("./assets/font/Poppins-Regular.ttf"),
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
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
