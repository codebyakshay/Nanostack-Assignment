import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { COLORS } from "../../../constants/COLORS";

interface PropTypes {}

export default function Profile({}: PropTypes): ReactElement {
  return (
    <View style={{ backgroundColor: COLORS.BACKGROUND, flex: 1 }}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
