import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { Text, View } from 'react-native';
import routes from "../../asset/transilation/routes";
import Image from "./image";
import Post from "./post";
import Settings from "./setting";
import User from "./user";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
const Tab = createBottomTabNavigator();

const Dashboard=()=>{
  
    return(
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string ;
              if (route.name === routes.root.dashboard.tabs.image.Name) {
                iconName = focused ? 'home': 'home-outline';
              }
               else if (route.name ===routes.root.dashboard.tabs.post.Name ) {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
              else if (route.name === routes.root.dashboard.tabs.settings.Name) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              else if (route.name === routes.root.dashboard.tabs.user.Name) {
                iconName = focused ? 'contact' : 'contact-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={24} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          })} 
        >
        
            <Tab.Screen name={routes.root.dashboard.tabs.image.Name} component={Image} />
            <Tab.Screen name={routes.root.dashboard.tabs.post.Name} component={Post} />
            <Tab.Screen name={routes.root.dashboard.tabs.settings.Name} component={Settings} />
            <Tab.Screen name={routes.root.dashboard.tabs.user.Name} component={User} />
        
        </Tab.Navigator>
    )
    
    
}
export default Dashboard;


