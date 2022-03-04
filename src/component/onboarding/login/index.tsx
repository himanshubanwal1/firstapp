import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text, StyleSheet, Pressable} from "react-native";
import routes from "../../../asset/transilation/routes";

const Login=()=>{
    const navigation=useNavigation();
    const onPress=()=>{
        navigation.navigate(routes.root.dashboard.Name)
    }
    return(
        <View style={Style.parent}>
            <Pressable onPress={onPress} style={Style.press}>
                <Text style={Style.text}>LOGIN</Text>
            </Pressable>
        </View>
    )
    
    
}

const Style=StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
    },
    text:{
        borderRadius:12,
        borderWidth:1,
        padding:4,
        color:'white',
        backgroundColor:'green'
  
    },
    press:{
      padding:12,
      
    }
  })

export default Login;