import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import routes from "../asset/transilation/routes";
import Dashboard from "../component/dashboard";
import Onboarding from "../component/onboarding";
import { QueryClient, QueryClientProvider } from 'react-query';



const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const Root = () => {


    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={routes.root.onboarding.Name} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={routes.root.onboarding.Name} component={Onboarding} />
                    <Stack.Screen name={routes.root.dashboard.Name} component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>

    )
}
export default Root;


