
import { NavigateBefore, Navigation } from "@mui/icons-material";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import {  Alert, Pressable,Image, Text,StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import routes from "../../../asset/transilation/routes";

import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";


const UserTab=()=>{
   const [userEmail,setuserEmail] = useState('');
   const [userName,setuserName] = useState('');
   const [userId,setuserId] = useState('');
   const [userimg, setuserimg] = useState('');
   const navigation = useNavigation();
      function onAuthStateChanged(user){
    if(user){
        setuserEmail(user.email);
        setuserId(user.uId);
        setuserName(user.displayName);
        setuserimg(user.photoURL);
    }
    else{
        setuserEmail('');
        setuserId('');
        setuserName('');
        setuserimg('');
    }
   }
   useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting. 
}, []);

async function signOut(){
    navigation.replace(routes.root.onboarding.login.Name);
    await auth().signOut(); 
}
    return(
        <View style={Style.container}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={Style.usertext}>
               USER PROFILE
            </Text>
                </View>
                <View style={Style.userdetail}>
                <Image source={{uri:userimg}} style={{width:100,height:100,borderRadius:100,marginBottom:30}} />
                <Text style={Style.textdetail}>NAME: {userName}</Text>
        <Text style={Style.textdetail}>EMAIL: {userEmail}</Text>
      
                </View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
               
       
        <TouchableOpacity>
         <LinearGradient colors={['#6C63FF','#34d5eb']} style={Style.logout}>
                <Pressable onPress={signOut}>
                <Text style={Style.logouttext} >Logout</Text>
                </Pressable>
            </LinearGradient>
   
        </TouchableOpacity>
                </View>
       
        
                </View>
    )
    
    
}


const Style = StyleSheet.create({
    container:{
        flex:2,
        
    },
    usertext:{
        fontWeight:'bold',
        fontSize: 30,
    },
    logouttext:{
        color: 'white',
        fontWeight: 'bold'
    },
    userdetail:{
alignItems:'center',

    },
    textdetail:{
fontSize:15,
marginBottom:10,

    },
    logout:{
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
       
    }
})

export default UserTab;

