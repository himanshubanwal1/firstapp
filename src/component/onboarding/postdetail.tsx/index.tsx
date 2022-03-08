import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import routes from '../../../asset/transilation/routes';
const PostDetail = ({ route, navigation }) => {
     console.log(route)
    const { body,id, title,userId } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Image Details</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textStyle}> Body: {body}</Text>
                <Text style={styles.textStyle}> id: {id}</Text>
                <Text style={styles.textStyle}> title: {title}</Text>
                <Text style={styles.textStyle}> userId: {userId}</Text>
            </View>
            <View>
                <Pressable onPress={() => {
                    navigation.navigate(routes.root.dashboard.Name);
                }} style={styles.button}>
                    <Text style={styles.btnText}>Back to Dashboard</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
    },
    header: {
        flex: 0.2,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center'
    },
    itemContainer: {
        flex: 0.4,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 50,
        paddingLeft: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        padding: 50,
        shadowColor: 'skyblue',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 25,
    },
    textStyle: {
        color: 'white',
        padding: 5,
        fontSize: 20
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 10,
        width: 150,
        borderRadius: 20,
        // paddingHorizontal: 15,
        margin: 110
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    }
})
export default PostDetail;