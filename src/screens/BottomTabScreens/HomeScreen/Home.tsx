import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement, useLayoutEffect, useState } from "react";

import { data } from "../../../data/data";
import { COLORS } from "../../../constants/COLORS";
import SegmentController from "../../../components/SegmentController";
import StatCard from "../../../components/StatCard";
import ButtonWithIcon from "../../../components/ButtonWithIcon";

import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Octicons from "@expo/vector-icons/Octicons";
import { FlatList } from "react-native-gesture-handler";
import UserCard from "../../../components/UserCard";

type PropTypes = {};

export default function Home({}: PropTypes): ReactElement {
  const [selectedTab, setSelectedTab] = useState("Breakfast");

  return (
    <View style={{ backgroundColor: COLORS.BACKGROUND, flex: 1, padding: 12 }}>
      <View style={styles.segmentContainer}>
        <SegmentController
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </View>

      <View style={styles.statCardContainer}>
        <StatCard count={5} label="Confirm" dotColor="#15E01D" />
        <StatCard count={5} label="Cancel" dotColor="#BE0000" />
        <StatCard count={5} label="Total" dotColor="#456dffff" />
      </View>

      <View style={styles.btnContainer}>
        <ButtonWithIcon
          btnLabel="Upload Today Meal !"
          prefixIcon={
            <Ionicons
              name="cloud-upload-outline"
              size={24}
              color={COLORS.LINK_ORANGE}
            />
          }
          suffixIcon={<Fontisto name="locked" size={20} color={"gold"} />}
        />

        <ButtonWithIcon
          btnLabel="Is Meal Prepared ?"
          prefixIcon={
            <Octicons name="bell" size={20} color={COLORS.LINK_ORANGE} />
          }
        />
      </View>

      <View style={styles.userCardContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              name={item.name}
              badgeCount={item.badgeCount}
              profileImage={item.profileImage}
              remainingMeals={item.remainingMeals}
              attendance={item.attendance}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  segmentContainer: {
    alignItems: "center",
    marginTop: 8,
  },

  statCardContainer: {
    marginVertical: 12,
    marginLeft: 18,
    flexDirection: "row",
  },
  btnContainer: {
    marginVertical: 12,
    marginLeft: 18,
  },

  userCardContainer: {
    padding: 12,
    height: "42%",
  },
});
