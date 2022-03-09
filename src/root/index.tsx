import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from "react";
import { Text } from "react-native";
import routes from "../asset/transilation/routes";
import Dashboard from "../component/dashboard";
import Onboarding from "../component/onboarding";
import { QueryClient, QueryClientProvider } from 'react-query';

import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

export const themecontext=createContext({
  isDarkTheme:false,
  setisDarkTheme:(param:boolean)=>{}
})
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const Root=()=>{
  
  const[isDarkTheme,setisDarkTheme]=useState(false)


  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: 'white',
      text: 'black'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: 'black',
      text: 'white'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


    return(
      <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <themecontext.Provider value={{isDarkTheme, setisDarkTheme}}>
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName={routes.root.onboarding.Name} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.root.onboarding.Name} component={Onboarding}/>
                <Stack.Screen name={routes.root.dashboard.Name} component={Dashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
        </themecontext.Provider>
      </PaperProvider>
      </QueryClientProvider>    
    )
  }
  export default Root;