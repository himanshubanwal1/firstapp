import React from "react";
import { Text, View } from 'react-native';
<<<<<<< HEAD
import { useTheme } from '@react-navigation/native';
const Image=()=>{
    const { colors } = useTheme();
    return(
        <View>
            <Text  style={{color: colors.text}}>
                IMAGE Himanshu
            </Text>
        </View>
=======
import { BASE_URL, IMAGES } from '../../../services/endpoints';
import { Pressable } from "react-native";
import { useQuery } from "react-query";
import Images from '../../../services/models/image';
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native";
import { StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import routes from '../../../asset/transilation/routes';

import PushNotification from "react-native-push-notification";


const ImageTab = ({ navigation }) => {

    const { data, isLoading } = useQuery('images1', () => fetch(BASE_URL + IMAGES).then(response => response.json().catch(err => console.log('Not getting response'))),
        {
            onSettled: () => {
                console.log('image api called settled')
            },
            onSuccess: () => {
                console.log('got response from image api.')
            }
        }
>>>>>>> b67657092d1700912d836a6049ef86d0dbddf7d2
    )




    const renderImage = ({ item, index }) => {
        // console.log(item)
        return (
            <TouchableOpacity onPress={() => {
                handleNotification(item, index)
            }}
            >
                <View style={styles.item}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.url }}
                        resizeMode='contain'
                    />
                    <View styles={styles.wrapText}>
                        <Text style={styles.fontSize}>{`${item.id}. ${item.title} `}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                            navigation.navigate(routes.root.onboarding.imageDetail.Name, {
                                _id: item.id,
                                title: item.title,
                                thumbnail_Url: item.thumbnailUrl,
                                album_Id: item.albumId
                            })
                        }}>
                            <Text style={styles.buttonText}>More Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }



    // notification
    const handleNotification = (item, index) => {

        // delete previous notifications
        PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You clicked on id: " + item.id,
            message: item.title,
            priority: "high",
            vibrate: true,
            ticker: "My Notification Ticker",
            color: "blue",
            playSound: true,
            soundName: "default",
            bigText: "Heya!!😜You can see the text here ",
            id: index,
        });

        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Alarm",
            message: "You clicked on id:" + item.id + " 10 seconds ago",
            date: new Date(Date.now() + 10 * 1000),
            allowWhileIdle: true,
        });
    }



    return (
        <View style={styles.container}>
            {
                isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                )
            }
        </View>
    );
}


const styles = StyleSheet.create({
    fontSize: {
        fontSize: 20,
        color: 'black',
        padding: 5,
        fontFamily: 'JosefinSans-Italic-VariableFont_wght'

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150,
    },
    wrapText: {
        flex: 1,
        marginLeft: 100,
        justifyContent: 'center',
    },
    item: {
        // flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.90)',
        padding: 50,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 10,

    },
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 30,
        paddingVertical: 30,
        paddingTop: 10,
        paddingBottom: 10,

    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#4DA0B0',
        padding: 10,
        borderRadius: 10,

    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',

    },

})


export default ImageTab;

