import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from 'react-native';
import routes from "../../asset/transilation/routes";
import Login from "./login";
import StartScreen from "./startscreen";
const Stack=createNativeStackNavigator();

const Onboarding=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
             <Stack.Screen name={routes.root.onboarding.startScreen.Name}   component={StartScreen}/>
             <Stack.Screen name={routes.root.onboarding.login.Name}   component={Login}/>
        </Stack.Navigator>
        
    )
    
    
}
export default Onboarding;