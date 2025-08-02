import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { height, width } from "../utils/responsive";

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
    height: height * 0.23, // 23% of screen height
    width: width * 0.5, // 50% of screen width
    borderRadius: (width * 0.5) / 2, // perfect circle
  },
  logoStyle: {
    height: "100%",
    width: "100%",
    borderRadius: (width * 0.5) / 2, // perfect circle
  },
});
