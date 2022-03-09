import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from 'react-native';
import routes from "../../asset/transilation/routes";
import ImageTab from "./image";
import Post from "./post";
import Settings from "./setting";
import User from "./user";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Dashboard = () => {
    return (
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name == routes.root.dashboard.tabs.image.Name) {
                        iconName = focused ? 'image' : 'image-outline'
                    }
                    else if (route.name == routes.root.dashboard.tabs.post.Name) {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name == routes.root.dashboard.tabs.settings.Name) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    else if (route.name == routes.root.dashboard.tabs.user.Name) {
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    return <Ionicons name={iconName} size={30} color={color} />
                },
                tabBarActiveTintColor: '#2a67f5',
                tabBarInactiveTintColor: '#6C63FF',
                tabBarLabelStyle: {
                    fontSize: 13,
                    color: '#6C63FF'
                },
            })
        }
        >
            <Tab.Screen name={routes.root.dashboard.tabs.post.Name} component={Post} options={{ title: 'Post' }} />
            <Tab.Screen name={routes.root.dashboard.tabs.image.Name} component={ImageTab} options={{ title: 'Image' }} />
            <Tab.Screen name={routes.root.dashboard.tabs.settings.Name} component={Settings} options={{ title: 'Settings' }} />
            <Tab.Screen name={routes.root.dashboard.tabs.user.Name} component={User} options={{ title: 'PROFILE' }} />
        </Tab.Navigator>
    )
}
export default Dashboard;