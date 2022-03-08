import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from 'react-native';
import routes from "../../asset/transilation/routes";
import Login from "./login";
import PostDetail from "./postdetail.tsx";
const Stack=createNativeStackNavigator();

const Onboarding=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={routes.root.onboarding.login.Name} component={Login}/>
            <Stack.Screen name={routes.root.onboarding.postDetail.Name} component={PostDetail}/>

        </Stack.Navigator>
        
    )
    
    
}
export default Onboarding;