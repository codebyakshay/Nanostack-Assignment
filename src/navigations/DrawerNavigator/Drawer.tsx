import { createDrawerNavigator } from "@react-navigation/drawer";
import Feedback from "../../screens/DrawerScreens/FeedbackScreen/Feedback";
import Help from "../../screens/DrawerScreens/HelpScreen/Help";
import LeaveRequest from "../../screens/DrawerScreens/LeaveRequestScreen/LeaveRequest";
import Security from "../../screens/DrawerScreens/SecurityScreen/Security";
import Subscription from "../../screens/DrawerScreens/SubscriptionScreen/Subscription";
import { BottomTabs } from "./BottomTabNavigator/BottomTabs";
import { COLORS } from "../../constants/COLORS";

import { Text, View } from "react-native";
import CustomDrawerHeader from "../../components/CustomDrawerHeader";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "black",
  headerBackground: () => (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: "center",
      }}
    >
      <Text>APNA THALI</Text>
    </View>
  ),
};
export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Business">
      <Drawer.Screen
        name="Business"
        component={BottomTabs}
        options={{
          header: () => <CustomDrawerHeader />,
          drawerLabel: "Business",
        }}
      />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="LeaveRequest" component={LeaveRequest} />
      <Drawer.Screen name="Security" component={Security} />
      <Drawer.Screen name="Subscription" component={Subscription} />
    </Drawer.Navigator>
  );
}
