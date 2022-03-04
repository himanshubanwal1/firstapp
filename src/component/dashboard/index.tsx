import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from 'react-native';
import routes from "../../asset/transilation/routes";
import Image from "./image";
import Post from "./post";
import Settings from "./setting";
import User from "./user";
const Tab = createBottomTabNavigator();
const Dashboard=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name={routes.root.dashboard.tabs.image.Name} component={Image}/>
            <Tab.Screen name={routes.root.dashboard.tabs.post.Name} component={Post}/>
            <Tab.Screen name={routes.root.dashboard.tabs.settings.Name} component={Settings}/>
            <Tab.Screen name={routes.root.dashboard.tabs.user.Name} component={User}/>
        </Tab.Navigator>
    )
    
    
}
export default Dashboard;