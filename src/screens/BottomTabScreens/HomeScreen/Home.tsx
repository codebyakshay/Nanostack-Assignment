import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement, useLayoutEffect, useState } from "react";
import { COLORS } from "../../../constants/COLORS";
import SegmentController from "../../../components/SegmentController";

type PropTypes = {};

export default function Home({}: PropTypes): ReactElement {
  const [selectedTab, setSelectedTab] = useState("Breakfast");

  return (
    <View style={{ backgroundColor: COLORS.BACKGROUND, flex: 1 }}>
      <View style={styles.segmentContainer}>
        <SegmentController
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  segmentContainer: {
    alignItems: "center",
    marginTop: 30,
  },
});
