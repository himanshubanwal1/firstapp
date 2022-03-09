import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { themecontext } from "../../../root";
import { useTranslation } from 'react-i18next';
import { useTheme  } from '@react-navigation/native';

const SettingsTab=()=>{
    const{isDarkTheme,setisDarkTheme}=useContext(themecontext)
    const onPress=()=>{
        setisDarkTheme( !isDarkTheme );
    }
    const { colors } = useTheme();
     
    const {t,i18n}= useTranslation(); 
    const selectLanguageCode =i18n.language;
    const LANGUAGES = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' }
      ];

    const setLanguage=(code)=>{
        return i18n.changeLanguage(code);
    }

    return(
        <View style={Style.parent}>
            <Pressable onPress={onPress} style={Style.press}>
                <Text style={Style.text}>{t("common:switchtoDarkTheme")}</Text>
            </Pressable>
            {LANGUAGES.map((language)=>
            {
                const selectedLanguage=language.code===selectLanguageCode;
                return<Pressable 
               // disabled={selectLanguageCode}
                onPress={()=>setLanguage(language.code)}>
                    <Text style={selectedLanguage?Style.text:Style.selectedText}>
                        {language.label}
                    </Text>
                </Pressable>
            })}

           
        </View>
    ) 
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
    selectedText:{
        color:"green",

    },
    pText:{
        color:"black"
    }
})

export default SettingsTab;