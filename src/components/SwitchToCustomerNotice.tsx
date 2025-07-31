import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { COLORS } from "../constants/COLORS";

type RootStackParamList = {
  CustomerLogin: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SwitchToCustomerNotice: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login & Register as{" "}
        <Text
          onPress={() => navigation.navigate("CustomerLogin")}
          style={styles.link}
        >
          Customer
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "LexendDecaVariable",
    fontSize: 14,
    color: "#1C1C1C",
  },
  link: {
    color: COLORS.LINK_ORANGE,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default React.memo(SwitchToCustomerNotice);
