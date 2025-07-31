// src/navigations/DrawerNavigator/BottomTabNavigator/BottomTabs.tsx

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../../../screens/BottomTabScreens/HomeScreen/Home";
import AddUser from "../../../screens/BottomTabScreens/AddUserScreen/AddUser";
import Report from "../../../screens/BottomTabScreens/ReportScreen/Report";
import MannageCustomer from "../../../screens/BottomTabScreens/MannageCustomerScreen/MannageCustomer";
import Profile from "../../../screens/BottomTabScreens/ProfileScreen/Profile";
import CustomBottomTab from "./CustomBottomTab";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ManageCustomer"
        component={MannageCustomer}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
