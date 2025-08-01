import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "../constants/COLORS";
import { AttendanceType } from "../data/data";

import CustomCheckbox from "./CustomCheckbox";

interface PropTypes {
  attendance: AttendanceType;
  firstBoxCheck: boolean;
  secondBoxCheck: boolean;
  setFirstBoxCheck: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondBoxCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayPauseBtn({
  attendance,
  firstBoxCheck,
  secondBoxCheck,
  setFirstBoxCheck,
  setSecondBoxCheck,
}: PropTypes): ReactElement {
  return (
    <View style={styles.outerContainer}>
      <Pressable style={styles.innerContainer}>
        <View style={styles.checkBoxGrpContainer}>
          {((attendance.mode === "manual" && attendance.status === "pending") ||
            attendance.status === "stopped") && (
            <>
              <View style={styles.markManuallyContainer}>
                <Text style={styles.markManuallyText}>Mark manually</Text>
              </View>

              <View style={styles.checkBoxRow}>
                {/* /////// */}

                <CustomCheckbox
                  value={firstBoxCheck}
                  onChange={setFirstBoxCheck}
                />
                <CustomCheckbox
                  value={secondBoxCheck}
                  onChange={setSecondBoxCheck}
                />
              </View>
            </>
          )}
        </View>
        <View style={styles.verticalDivider} />

        <View style={styles.iconContainer}>
          {attendance.mode == "auto" && attendance.status == "running" ? (
            <Feather name="pause" size={15} color={COLORS.LINK_ORANGE} />
          ) : (
            <Feather name="play" size={15} color={COLORS.LINK_ORANGE} />
          )}
        </View>
      </Pressable>

      <View>
        <Text style={styles.actionText}>
          {attendance.mode == "auto" && attendance.status == "running"
            ? "stop"
            : "start"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  innerContainer: {
    width: 30,
    height: 30,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    //
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },

  iconContainer: {},

  actionText: {
    fontFamily: "LexendDecaVariable",
    fontWeight: "300",
    fontSize: 6,
    marginTop: 4,
    color: COLORS.LINK_ORANGE,
  },

  checkBoxGrpContainer: {
    // backgroundColor: "red",
    width: 60,
    height: 44,
    position: "absolute",
    right: 40,
  },

  verticalDivider: {
    width: 0.5,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    right: 40,
    top: 3,
  },
  markManuallyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  markManuallyText: {
    fontFamily: "LexendDecaVariable",
    fontWeight: "300",
    fontSize: 7,
  },
  checkBoxRow: {
    flexDirection: "row",
  },
});
