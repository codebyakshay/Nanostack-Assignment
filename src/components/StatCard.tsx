import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface PropTypes {
  count: number;
  label: string;
  dotColor?: string;
}

export default function StatCard({
  count = 5,
  label = "Total",
  dotColor = "#3f51b5",
}: PropTypes): ReactElement {
  return (
    <View style={styles.card}>
      {/* Circle with number */}
      <View style={styles.circle}>
        <Text style={styles.count}>{count}</Text>
      </View>

      {/* Glowing Dot */}
      <View style={[styles.dot, { backgroundColor: dotColor }]} />

      {/* Label */}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 92,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Android shadow
    margin: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff7043", // Orange-ish
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    fontFamily: "LexendDecaVariable",
    fontWeight: "400",
    color: "#ff7043",
  },
});
