import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {}

export default function CustomDrawer({}: PropTypes): ReactElement {
  return (
    <View>
      <Text>CustomDrawer</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
