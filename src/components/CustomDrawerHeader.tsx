import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/COLORS";

export default function CustomDrawerHeader() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header} edges={["top"]}>
      <View style={styles.left}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="black" />
        </Pressable>
        <View style={styles.titleBox}>
          <Text style={styles.title}>APNA THALI</Text>
          <Text style={styles.subtitle}>Id : Rest-02</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Feather name="truck" size={20} color="#4B4B4B" />
        <Feather
          name="bell"
          size={20}
          color="#4B4B4B"
          style={{ marginLeft: 15 }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.BACKGROUND,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleBox: {
    marginLeft: 12,
  },
  title: {
    fontFamily: "LexendDecaVariable",
    fontSize: 18,
    fontWeight: "700",
    color: "#4B3C3C",
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
});
