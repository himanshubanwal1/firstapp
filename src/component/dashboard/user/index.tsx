import React from "react";
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
const UserTab=()=>{
    const { colors } = useTheme();
    return(
        <View>
            <Text  style={{color: colors.text}}>
               Post
            </Text>
        </View>
    )
    
    
}
export default UserTab;