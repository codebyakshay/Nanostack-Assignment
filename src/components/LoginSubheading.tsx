import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { height, width } from "../utils/responsive";

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
    marginTop: height * 0.06, // ~5% of screen height
    marginBottom: -height * 0.05, // pull up by 5% of screen height
  },
});
