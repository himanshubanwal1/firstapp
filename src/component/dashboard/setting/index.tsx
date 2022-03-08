import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { themecontext } from "../../../root";
import { useTranslation } from 'react-i18next';
import { useTheme  } from '@react-navigation/native';
import Selector from "../../common/language/languageSelector";


const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

<<<<<<< HEAD
const Settings=()=>{
    const{isDarkTheme,setisDarkTheme}=useContext(themecontext)
    const onPress=()=>{
        setisDarkTheme( !isDarkTheme );
    }
    const { colors } = useTheme();

    return(
        <View style={Style.parent}>
           
            <Pressable onPress={onPress} style={Style.press}>
                <Text style={Style.text}>SWITCH TO DARK THEME</Text>
            </Pressable>
           
        </View>
    ) 
=======
const Settings = () => {
    return (
        <View>
            <Text>
                Settings
            </Text>
        </View>
    )


>>>>>>> b67657092d1700912d836a6049ef86d0dbddf7d2
}


const Style=StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
    },
    press:{
        padding:12,
    },
    text:{
        borderRadius:12,
        borderWidth:1,
        padding:4,
        color:'white',
        backgroundColor:'blue'
  
    },
})

export default Settings;