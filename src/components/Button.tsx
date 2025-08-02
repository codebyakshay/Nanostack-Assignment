import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {
  title: string;
  onPress?(): void;
}

export default function Button({ title, onPress }: PropTypes): ReactElement {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.conatiner,
        { opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: "LexendDecaVariable",
          fontWeight: "600",
          color: "white",
          fontSize: 19,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: 300,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,

    //Andoid
    elevation: 3,

    // shadow for ios
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});
