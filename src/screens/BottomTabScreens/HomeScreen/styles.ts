import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/responsive";

export const styles = StyleSheet.create({
  segmentContainer: {
    paddingHorizontal: width * 0.05,
  },

  statCardContainer: {
    paddingHorizontal: width * 0.05,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnContainer: {
    paddingHorizontal: width * 0.05,
  },
  searchContainer: {
    marginVertical: 4,
    paddingHorizontal: width * 0.05,
  },

  userCardContainer: {
    padding: width * 0.03, // ~12px on 400px screen width
    height: height * 0.37, // 50% of screen height
  },
});
