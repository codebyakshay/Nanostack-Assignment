import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/COLORS";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },

  // TOP container
  topContainer: {
    flex: 1.5,
    borderColor: "black",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
    // shadow for ios
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 0.1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,

    //
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  dividerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  dividerLine: {
    width: "40%",
    height: 5,
    borderWidth: 0.7,
    borderRadius: 99,
    borderColor: COLORS.LINK_ORANGE,
    backgroundColor: COLORS.LINK_ORANGE,
  },

  //
  bottomContainer: {
    flex: 2.1,
    justifyContent: "center",
  },

  loginContainer: {
    flex: 0.8,
    padding: 12,
    alignItems: "center",
  },

  termsAndCondetionContainer: {
    paddingHorizontal: 36,
    marginVertical: 10,
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
  },

  loginButtonContainer: {
    marginTop: 25,
  },

  signUpText: {
    marginTop: 20,
  },
});
