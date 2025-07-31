import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {}

export default function LoginSubheading({}: PropTypes): ReactElement {
  return (
    <View style={styles.topTextContainer}>
      <Text
        style={{
          fontFamily: "LexendDecaVariable",
          fontWeight: "400",
          color: "#766565",
        }}
      >
        Login & Register vendor
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -50,
    marginTop: 50,
  },
});
