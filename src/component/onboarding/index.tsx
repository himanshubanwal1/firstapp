import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from 'react-native';
import routes from "../../asset/transilation/routes";
import Login from "./login";
<<<<<<< HEAD
import PostDetail from "./postdetail.tsx";
const Stack=createNativeStackNavigator();

const Onboarding=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={routes.root.onboarding.login.Name} component={Login}/>
            <Stack.Screen name={routes.root.onboarding.postDetail.Name} component={PostDetail}/>
=======
import ImageDetail from './imageDetail';

>>>>>>> b67657092d1700912d836a6049ef86d0dbddf7d2

const Stack = createNativeStackNavigator();

const Onboarding = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.root.onboarding.login.Name} component={Login} />
            <Stack.Screen name={routes.root.onboarding.imageDetail.Name} component={ImageDetail} />
        </Stack.Navigator>

    )


}
export default Onboarding;