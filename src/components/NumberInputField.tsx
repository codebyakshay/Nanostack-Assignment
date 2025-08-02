import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { ReactElement } from "react";
import { height, width } from "../utils/responsive";

interface PropTypes {
  value: string;
  legend: string;
  onChangeText: (text: string) => void;
}

export default function NumberInputField({
  value,
  legend,
  onChangeText,
}: PropTypes): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.legend}>{legend}</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.prefix}>+91</Text>

        <TextInput
          placeholder="Enter phone number"
          style={styles.textInput}
          value={value}
          keyboardType="number-pad"
          onChangeText={onChangeText}
          maxLength={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.012, // ~10px
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: width * 0.85, // 85% screen width
  },
  legend: {
    marginBottom: height * 0.007, // ~6px
    fontSize: width * 0.04, // ~16px (based on width)
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: width * 0.02, // ~8px
    paddingHorizontal: width * 0.025, // ~10px
    paddingVertical: height * 0.007, // ~6px
  },
  prefix: {
    marginRight: width * 0.02, // ~8px
    fontSize: width * 0.04, // ~16px
    color: "#000000",
    fontFamily: "LexendDecaVariable",
    fontWeight: "400",
  },
  textInput: {
    flex: 1,
    fontSize: width * 0.04, // ~16px
    paddingVertical: 0,
    fontFamily: "LexendDecaVariable",
    fontWeight: "400",
    color: "#000000",
  },
});
