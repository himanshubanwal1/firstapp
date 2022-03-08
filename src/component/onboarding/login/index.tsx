import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Button, Alert } from "react-native";
import routes from "../../../asset/transilation/routes";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';

const Login = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate(routes.root.dashboard.Name)
    }

    useEffect(() => {
        createChannels();
        // to get the token of device
        messaging().getToken().then(token => {
            console.log('My token: ', token)
        })

    }, [])


    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
            PushNotification.localNotification({
                channelId: "test-channel",
                title: "Remote Notification from net solutions",
                message: 'Heya This notification is from Net solutions, Technology Park, Chandigarh ❤😍',
            })
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('Notification caused app to open from background state:',
                remoteMessage.notification, );
            navigation.navigate(routes.root.dashboard.Name);
        })
    }, [])

    // useEffect(() => {
    //     PushNotification.localNotification
    // }, [])



    // Push notification
    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }






    return (
        <View style={Style.parent}>
            <Pressable onPress={onPress} style={Style.press}>
                <Text style={Style.text}>LOGIN</Text>
            </Pressable>

        </View>
    )


}

const Style = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        borderRadius: 12,
        borderWidth: 1,
        padding: 4,
        color: 'white',
        backgroundColor: 'green'

    },
    press: {
        padding: 12,

    }
})

export default Login;