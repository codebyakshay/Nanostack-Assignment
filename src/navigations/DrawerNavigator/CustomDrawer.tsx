import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import CustomDrawerItem from "./CustomDrawerItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

export default function CustomDrawer({
  navigation,
  descriptors,
  state,
}: DrawerContentComponentProps) {
  //

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.crossBtnContainer}>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <Entypo name="cross" size={32} color="white" />
        </Pressable>
      </View>

      {state.routes.map((item, index) => {
        const isFocused = state.index === index;

        return (
          <CustomDrawerItem
            key={item.key} // unique key for React
            screenLabel={item.name} // screen name
            isFocused={isFocused} // boolean → true if active tab
            onPress={() => navigation.navigate(item.name)} // navigate to screen
          />
        );
      })}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 50,
          left: "40%",
        }}
      >
        <Text
          style={{
            fontWeight: "300",
            fontFamily: "PoppinsRegular",
            color: "white",
            fontSize: 15,
          }}
        >
          Version: 0.1
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  crossBtnContainer: {
    position: "absolute",
    top: 70,
    left: 30,
    height: 42,
    width: 42,
    // backgroundColor: "black",
  },
});
