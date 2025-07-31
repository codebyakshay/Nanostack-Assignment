import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { COLORS } from "../constants/COLORS";

// Optional: Define your stack param list if you want strong typing for navigation
type RootStackParamList = {
  TermsOfUser: undefined;
  PrivacyPolicy: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const TermsNotice: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By continuing, you agree to Thali app{" "}
        <Text
          onPress={() => navigation.navigate("TermsOfUser")}
          style={styles.link}
        >
          Terms of Use
        </Text>{" "}
        and{" "}
        <Text
          onPress={() => navigation.navigate("PrivacyPolicy")}
          style={styles.link}
        >
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  text: {
    fontFamily: "LexendDecaVariable",
    fontWeight: "300",
    color: "#334669",
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: COLORS.LINK_ORANGE,
  },
});

export default React.memo(TermsNotice);
