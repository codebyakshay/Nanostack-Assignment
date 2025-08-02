import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {
  btnLabel: string;
  onPress?(): void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}
export default function ButtonWithIcon({
  btnLabel,
  onPress,
  prefixIcon,
  suffixIcon,
}: PropTypes): ReactElement {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* PREFIX ICON */}
      <View style={styles.iconContainerPre}>{prefixIcon}</View>

      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>{btnLabel}</Text>
      </View>

      {/* SUFFIX ICON */}
      <View style={styles.iconContainerSuf}>{suffixIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 49,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF79546E",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginVertical: 4,
  },

  labelTextContainer: {},

  labelText: {
    fontFamily: "LexendDecaVariable",
    fontWeight: "500",
    fontSize: 16,
    color: "#564646",
  },

  iconContainerPre: {
    paddingHorizontal: 8,
  },
  iconContainerSuf: {
    paddingHorizontal: 8,
  },
});
