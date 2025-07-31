import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { ReactElement } from "react";

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
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "85%",
  },
  legend: {
    marginBottom: 6,
    fontSize: 16,
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  prefix: {
    marginRight: 8,
    fontSize: 16,
    color: "#000000",
    fontFamily: "LexendDecaVariable",
    fontWeight: "400",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    fontFamily: "LexendDecaVariable",
    fontWeight: "400",
    color: "#000000",
  },
});
