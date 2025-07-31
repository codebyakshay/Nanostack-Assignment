import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {}

export default function Feedback({}: PropTypes): ReactElement {
  return (
    <View>
      <Text>Feedback</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
