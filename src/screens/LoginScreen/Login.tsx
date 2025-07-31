// src/screens/LoginScreen/Login.tsx
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { ReactElement, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LocalStackParamList } from "../../navigations/LocalNavigation";

import { styles } from "./styles";
import NumberInputField from "../../components/NumberInputField";
import TermsNotice from "../../components/TermsNotice";
import Button from "../../components/Button";
import SwitchToCustomerNotice from "../../components/SwitchToCustomerNotice";
import LogoContainer from "../../components/LogoContainer";
import LoginSubheading from "../../components/LoginSubheading";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  LocalStackParamList,
  "Login"
>;

interface PropTypes {
  navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }: PropTypes): ReactElement {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        {/* /// TOP CONTAINER /// */}
        <View style={styles.topContainer}>
          <LogoContainer />
          <LoginSubheading />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
        </View>

        {/* /// BOTTOM CONTAINER /// */}
        <View style={styles.bottomContainer}>
          <View style={styles.loginContainer}>
            <NumberInputField
              value={mobileNumber}
              legend="Phone Number"
              onChangeText={setMobileNumber}
            />
            <View>
              <TermsNotice />
            </View>

            <View style={styles.loginButtonContainer}>
              <Button title="Login" />
            </View>

            <View style={styles.signUpText}>
              <SwitchToCustomerNotice />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
