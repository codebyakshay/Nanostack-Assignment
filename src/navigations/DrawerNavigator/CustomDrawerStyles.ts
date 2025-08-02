import { StyleSheet } from "react-native";
import { height, width } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  crossBtnContainer: {
    position: "absolute",
    top: height * 0.02, // ~68px on ~850px screen height
    left: width * 0.041, // ~20px on ~400px screen width
    height: width * 0.105, // ~42px on 400px screen
    width: width * 0.105, // keep it square
    // backgroundColor: "black",
  },
});
