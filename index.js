/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Root from './src/root';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';

PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },
    requestPermissions: Platform.OS === 'android',
    // setBackgroundMessageHandler: true,
})

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => Root);
