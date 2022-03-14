import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import routes from "../../asset/transilation/routes";
import ImageTab from "./image";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import "../../asset/constant/IMLocalize"
import PostTab from "./post";
import SettingsTab from "./setting";
import UserTab from "./user";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === routes.root.dashboard.tabs.image.Name) {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === routes.root.dashboard.tabs.post.Name) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === routes.root.dashboard.tabs.settings.Name) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          else if (route.name === routes.root.dashboard.tabs.user.Name) {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >

      <Tab.Screen
        name={routes.root.dashboard.tabs.image.Name}
        component={ImageTab}
        options={{ tabBarLabel: t("common:imageTab") }}
      />
      <Tab.Screen
        name={routes.root.dashboard.tabs.post.Name}
        component={PostTab}
        options={{ tabBarLabel: t("common:post") }}
      />
      <Tab.Screen
        name={routes.root.dashboard.tabs.settings.Name}
        component={SettingsTab}
        options={{ tabBarLabel: t("common:settings") }}
      />
      <Tab.Screen
        name={routes.root.dashboard.tabs.user.Name}
        component={UserTab}
        options={{ tabBarLabel: t("common:user") }}
      />

    </Tab.Navigator>
  )



}
export default Dashboard;

