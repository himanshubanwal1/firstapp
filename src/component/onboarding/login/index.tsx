import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity, StatusBar, TextInput, Button, Alert } from "react-native";
import routes from "../../../asset/transilation/routes";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome, { SolidIcons } from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth, { firebase } from '@react-native-firebase/auth';


import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => { // detaching the listener
            if (user) {
                // ...your code to handle authenticated users. 
                navigation.navigate(routes.root.dashboard.Name);
            } else {
                // No user is signed in...code to handle unauthenticated users. 

            }
        });
        return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting. 
    }, []);

    const navigation = useNavigation();
    GoogleSignin.configure({
        webClientId: '266561141597-289afanpufq8v3fm6na3mnb2qmaflsml.apps.googleusercontent.com',
    });


    const signIn = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in.then((user) => {
            console.log(user);
        })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        createChannels();
        // to get the token of device
        // messaging().getToken().then(token => {
        //     console.log('My token: ', token)
        // })
    }, [])




    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            // console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
            PushNotification.localNotification({
                channelId: "test-channel",
                title: remoteMessage.notification.title,
                message: remoteMessage.notification.body,
                largeIconUrl: remoteMessage.notification.android.imageUrl,
                bigPictureUrl: remoteMessage.notification.android.imageUrl,
            })

        });
        return unsubscribe;
    }, []);




    useEffect(() => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            // console.log('Notification caused app to open from background state:', remoteMessage.notification, );
            navigation.navigate(routes.root.dashboard.Name);
        })
    }, [])






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

        <View style={Style.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#6C63FF" translucent={true} />

            <View style={Style.header}>
                <Text style={Style.text_header}>Welcome! 🚀</Text>
            </View>

            <View style={Style.footer}>
                <Text style={Style.text_footer}>Email</Text>
                <View style={Style.action}>
                    <Ionicons name="person-outline" color='#34d5eb' size={25} style={{ marginTop: 10 }} />
                    <TextInput placeholder="Your Email" style={Style.textinput} />
                </View>
                <View style={Style.action}>
                    <Ionicons name="lock-closed-outline" color='#34d5eb' size={25} style={{ marginTop: 10 }} />
                    <TextInput placeholder="Your Password" style={Style.textinput} />
                </View>
                <View style={Style.button}>
                    <TouchableOpacity>
                        <LinearGradient colors={['#6C63FF', '#34d5eb']} style={Style.signin}>
                            <Pressable >
                                <Text style={Style.textsign} >Sign In</Text>
                            </Pressable>
                        </LinearGradient>

                    </TouchableOpacity>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48, marginTop: 10 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signIn}
                    />
                    <Image source={require('../../../asset/images/authlogo.png')} style={{ width: 200, height: 200, marginTop: 5 }} />
                </View>
            </View>   
        </View>
    );
}

const Style=StyleSheet.create({
            container:{
                flex:1,
                backgroundColor: '#6C63FF', 
             },

            header:{
                flex: 2,
            justifyContent: 'flex-end',
            marginBottom:50,
            paddingHorizontal: 20,
             },
            logo:{

            },
            footer:{
             flex: 4,
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
            text_header:{
                color: '#fff',
            fontWeight: 'bold',
            fontSize: 30,
    },
            text_footer:{
                color: '#05375a',
            fontSize: 18,
    },
            textinput:{
                flex:1,
            paddingLeft: 10,
            color: '#34d5eb',
        
    },
            action:{
                flexDirection: "row",
            marginTop: 20,

    },
            text:{
                color: 'grey',
            marginTop: 5,
    },
            button:{
                marginTop: 30,
            alignItems: 'center'
    },
            signin:{
                width: 200,
            height: 50,
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

            export default Login;