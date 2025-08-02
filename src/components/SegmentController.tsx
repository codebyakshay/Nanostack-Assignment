import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export default function SegmentController({
  selectedTab,
  onTabChange,
}: PropTypes): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.links}>
        {["Breakfast", "Lunch", "Dinner"].map((meal) => (
          <Pressable
            key={meal}
            onPress={() => onTabChange(meal)}
            style={[styles.tab, selectedTab === meal && styles.selectedTab]}
          >
            <Text
              style={[styles.text, selectedTab === meal && styles.selectedText]}
            >
              {meal}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 2,
  },
  tab: {
    width: "30%",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 15,
  },
  selectedTab: {
    backgroundColor: "#ff7a45",
  },
  text: {
    fontFamily: "LexendDecaVariable",
    color: "#ff7a45",
    fontWeight: "500",
  },
  selectedText: {
    color: "#ffffff",
  },
});
