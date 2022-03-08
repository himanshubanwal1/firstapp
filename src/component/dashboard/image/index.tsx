import React from "react";
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
const Image=()=>{
    const { colors } = useTheme();
    return(
        <View>
            <Text  style={{color: colors.text}}>
                IMAGE Himanshu
            </Text>
        </View>
    )
    
    
}
export default Image;