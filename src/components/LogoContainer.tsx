import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {}

export default function LogoContainer({}: PropTypes): ReactElement {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoStyle}
        source={require("../../assets/image/loginScreenLogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 209,
    width: 211,
    borderRadius: 200,
  },

  logoStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 200,
  },
});
