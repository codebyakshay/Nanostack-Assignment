import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { COLORS } from "../../constants/COLORS";
import { styles } from "./CustomDrawerItemStyles";

/*
 // business - name: restaurant 
 // subscription - name: subscriptions
 // Leave Request - name: sticky-note-2
 // security. - name: security
 // help - name: help-outline
 // feedback - name: star-border
 */

interface PropTypes {
  screenLabel: string;
  onPress?(): void;
  isFocused: boolean;
}

export default function CustomDrawerItem({
  screenLabel,
  onPress,
  isFocused,
}: PropTypes): ReactElement {
  //

  const iconMap: Record<string, keyof typeof MaterialIcons.glyphMap> = {
    Business: "restaurant",
    Subscription: "subscriptions",
    LeaveRequest: "sticky-note-2",
    Security: "security",
    Help: "help-outline",
    Feedback: "star-border",
  };

  const iconName = iconMap[screenLabel] || "help-outline";

  return (
    <>
      <Pressable
        style={[styles.container, isFocused && styles.focused]}
        onPress={onPress}
      >
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "red",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name={iconName}
            size={24}
            color={"white"}
            style={{ marginHorizontal: 12 }}
          />

          <Text
            style={{
              color: "white",
              textAlign: "left",
              fontFamily: "PoppinsSemiBold",
              fontSize: 17,
            }}
          >
            {screenLabel}
          </Text>
        </View>
      </Pressable>
      <View style={{ alignItems: "flex-end", width: 210 }}>
        <View style={styles.divider} />
      </View>
    </>
  );
}
