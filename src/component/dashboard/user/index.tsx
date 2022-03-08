import { NavigateBefore, Navigation } from "@mui/icons-material";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import {  Alert, Pressable,Image, Text, View } from 'react-native';
import routes from "../../../asset/transilation/routes";

import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";


const User=()=>{
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
        <View>
            <Text>
               Post
            </Text>
        <Pressable onPress={signOut}>
            <Text>Signout</Text>
        </Pressable>
        <Text>{userName}</Text>
        <Text>{userEmail}</Text>
        <Text>{userimg}</Text>
        
                </View>
    )
    
    
}
export default User;