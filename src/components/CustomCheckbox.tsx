import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

export default function CustomCheckbox({ value, onChange }: Props) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      style={[styles.checkboxBase, value && styles.checked]}
    >
      {value && <MaterialIcons name="check" size={18} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 4,
    marginHorizontal: 2,
  },
  checked: {
    backgroundColor: "#007fff",
    borderColor: "#007fff",
  },
});
