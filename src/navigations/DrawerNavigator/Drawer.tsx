import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabs } from "./BottomTabNavigator/BottomTabs";
import { COLORS } from "../../constants/COLORS";

import CustomDrawerHeader from "../../components/CustomDrawerHeader";
import Feedback from "../../screens/DrawerScreens/FeedbackScreen/Feedback";
import Help from "../../screens/DrawerScreens/HelpScreen/Help";
import LeaveRequest from "../../screens/DrawerScreens/LeaveRequestScreen/LeaveRequest";
import Security from "../../screens/DrawerScreens/SecurityScreen/Security";
import Subscription from "../../screens/DrawerScreens/SubscriptionScreen/Subscription";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Business"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerStyle: {
          width: "100%",
          backgroundColor: COLORS.LINK_ORANGE,
        },
        drawerType: "front",
      }}
    >
      <Drawer.Screen
        name="Business"
        component={BottomTabs}
        options={{
          header: () => <CustomDrawerHeader />,
          drawerLabel: "Business",
        }}
      />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="LeaveRequest" component={LeaveRequest} />
      <Drawer.Screen name="Security" component={Security} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Feedback" component={Feedback} />
    </Drawer.Navigator>
  );
}
