import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactElement, useState } from "react";
import { COLORS } from "../constants/COLORS";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PlayPauseBtn from "./PlayPauseBtn";

interface PropTypes {
  name: string;
  profileImage: string;
  remainingMeals: number;
  badgeCount: number;
  attendance: {
    mode: "auto" | "manual";
    status: "running" | "pending" | "stopped";
  };
}

export default function UserCard({
  name,
  profileImage,
  remainingMeals,
  badgeCount,
  attendance,
}: PropTypes): ReactElement {
  const [firstBoxCheck, setFirstBoxCheck] = useState<boolean>(false);
  const [secondBoxCheck, setSecondBoxCheck] = useState<boolean>(false);

  return (
    <>
      <View style={styles.badgeStyle}>
        <Text style={styles.badgeText}>{badgeCount}</Text>
      </View>

      <View style={styles.outerContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.container,
            { opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: profileImage }} style={styles.imageStyle} />
          </View>

          <View>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="food"
                size={14}
                color="black"
                style={styles.iconStyle}
              />
              <Text style={styles.remainingText}>
                {remainingMeals} remaining
              </Text>
            </View>
          </View>

          <View style={styles.playPauseBtnContainer}>
            <PlayPauseBtn
              attendance={attendance}
              firstBoxCheck={firstBoxCheck}
              setFirstBoxCheck={setFirstBoxCheck}
              secondBoxCheck={secondBoxCheck}
              setSecondBoxCheck={setSecondBoxCheck}
            />
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "flex-end",
  },
  container: {
    height: 63,
    width: "95%",
    marginVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  //
  badgeStyle: {
    height: 24,
    width: 24,
    backgroundColor: COLORS.LINK_ORANGE,
    position: "absolute",
    left: -4,
    top: 24,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  badgeText: {
    fontSize: 12,
    color: "white",
    fontFamily: "LexendDecaVariable",
  },

  //
  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },

  //
  nameText: {
    fontFamily: "LexendDecaVariable",
    fontWeight: "600",
    fontSize: 14,
  },

  //
  row: {
    flexDirection: "row",
  },

  //
  iconStyle: {
    marginHorizontal: 2,
  },
  remainingText: {
    fontFamily: "LexendDecaVariable",
    fontWeight: "300",
    fontSize: 12,
  },

  //
  playPauseBtnContainer: {
    position: "absolute",
    right: 20,
  },
});
