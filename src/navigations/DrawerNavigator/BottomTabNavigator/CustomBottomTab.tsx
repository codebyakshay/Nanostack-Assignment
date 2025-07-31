// src/navigations/DrawerNavigator/BottomTabNavigator/CustomBottomTab.tsx
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../../constants/COLORS";

const windowWidth = Dimensions.get("window").width;

export default function CustomBottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Icon + label mapping
        const getIcon = () => {
          switch (route.name) {
            case "Home":
              return (
                <AntDesign
                  name="home"
                  size={24}
                  color={isFocused ? COLORS.LINK_ORANGE : "gray"}
                />
              );
            case "Report":
              return (
                <Feather
                  name="list"
                  size={24}
                  color={isFocused ? COLORS.LINK_ORANGE : "gray"}
                />
              );
            case "AddUser":
              return (
                <View style={styles.addUserWrapper}>
                  <FontAwesome5 name="user-plus" size={28} color="white" />
                </View>
              );
            case "ManageCustomer":
              return (
                <MaterialIcons
                  name="groups"
                  size={24}
                  color={isFocused ? COLORS.LINK_ORANGE : "gray"}
                />
              );
            case "Profile":
              return (
                <Feather
                  name="user"
                  size={24}
                  color={isFocused ? COLORS.LINK_ORANGE : "gray"}
                />
              );
            default:
              return null;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[
              styles.tabItem,
              route.name === "AddUser" && styles.centerTabItem,
            ]}
            activeOpacity={0.8}
          >
            {getIcon()}
            {route.name !== "AddUser" && isFocused && (
              <Text
                style={{
                  color: isFocused ? COLORS.LINK_ORANGE : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                {route.name === "ManageCustomer" ? "Customer" : route.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: "#fff0fa",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 8,
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth / 5.5,
  },
  centerTabItem: {
    backgroundColor: COLORS.LINK_ORANGE,
    padding: 16,
    borderRadius: 20,
    marginTop: -30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  addUserWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});
