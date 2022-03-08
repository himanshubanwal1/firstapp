import React from "react";
import { Text, View } from 'react-native';
import { Pressable } from "react-native";
import { useQuery } from "react-query";
import { Post } from "../../../service/modules/post";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native";
import { StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import routes from '../../../asset/transilation/routes';
import { BASE_URL, POST } from "../../../service/endpoint";
const PostTab = ({ navigation }) => {
    const { data, isLoading } = useQuery('images1', () => fetch(BASE_URL + POST).then(response => response.json().catch(err => console.log('Not getting response'))),
        {
            onSettled: () => {
                console.log('image api called settled')
            },
            onSuccess: () => {
                console.log('got response from image api.')
            }
        }
    )
    const renderImage = ({ item }) => {
        console.log(item)
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: item.url }}
                    resizeMode='contain'
                />
                <View style={styles.wrapText}>
                    <Text style={styles.fontSize}>{`${item.id}. ${item.title} `}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                        navigation.navigate(routes.root.onboarding.postDetail.Name, {
                            body:item.string,
                            id:item.number,
                            title:item.string,
                            userId:item.number,
                        })
                    }}>
                        <Text style={styles.buttonText}>More Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
export default PostTab;