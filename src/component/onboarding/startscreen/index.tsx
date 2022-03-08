import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,Image, StyleSheet, Pressable, TouchableOpacity, StatusBar} from "react-native";
import routes from "../../../asset/transilation/routes";
import LinearGradient from 'react-native-linear-gradient';

const StartScreen=()=>{
const navigation = useNavigation();
    return(
        
        <View style={Style.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#6C63FF" translucent = {true}/>

            
         <View style={Style.header}>
        <Image 
        source={require('../../../asset/images/loginlogo.png')}
        style={Style.logo}
      
        />
        </View>
         <View style={Style.footer}>
        <Text style={Style.title}>Stay connected with everyone 🚀</Text>
        <Text style={Style.text}>Sign in with account</Text>
        <View style={Style.button}>
        <TouchableOpacity>
            
             <LinearGradient colors={['#6C63FF','#536DFE']} style={Style.signin}>
                 <Pressable onPress={() => navigation.navigate(routes.root.onboarding.login.Name)}>
                 <Text style={Style.textsign} >Get Started </Text>
                 </Pressable>
                 
             </LinearGradient>
             
         </TouchableOpacity>
         </View>
         </View>
         
         
      
        </View>
    )
    
    
}

const Style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#34d5eb',
    },
    header:{
        flex: 2,
        justifyContent: 'center',
        alignItems:'center'
    
    },
    logo:{
     
    },
    footer:{
     flex: 1,
     backgroundColor:'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal:40,
    },
    title:{
        color: '#6C63FF',
        fontSize: 30,
        fontWeight: "bold",
    },
    text:{
        color: 'grey',
        marginTop: 5,
    },
    button:{
        marginTop: 30,
        alignItems: 'flex-end'
    },
    signin:{
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection: 'row'
    },
    textsign:{
        color: 'white',
        fontWeight: 'bold'
    }
  })

export default StartScreen;