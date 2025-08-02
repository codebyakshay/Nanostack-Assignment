import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { width } from "../utils/responsive";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Eg : Aman, 1, e.t.c."
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: width * 0.05,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#999",
  },
  input: {
    flex: 1,
    fontSize: width * 0.04,
    color: "#333",
    fontFamily: "LexendDecaVariable",
  },
});
