import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import CustomDrawerItem from "./CustomDrawerItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
          <Entypo name="cross" size={38} color="white" />
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

      <Pressable
        style={() => [
          {
            flexDirection: "row",
            position: "absolute",
            left: 41,
            top: 750,
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            marginHorizontal: 8,
            fontSize: 17,
          }}
        >
          Sign-out
        </Text>
        <FontAwesome5 name="arrow-right" size={18} color="white" />
      </Pressable>

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
    top: 68,
    left: 20,
    height: 42,
    width: 42,
    // backgroundColor: "black",
  },
});
