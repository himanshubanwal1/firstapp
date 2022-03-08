const admin = require('firebase-admin');

var serviceAccount = require("c:\\Users\\aditya.singh\\Desktop\\firstapp\\nodejs stuff\\firstapp-rn-firebase-adminsdk-usw1i-3632ef36c9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const message = {
    notification: {
        title: "new ad",
        body: 'new add posted click to open'
    },
    token: 'dy21QsnYRyGn0Y0uReG5x_:APA91bF2boY78TNyJ9LAPIiclmAIZfapJ03Jso6o6SpFIXvlc02JrW-MP1pl7gw_4s8yl2O8nl6lCY66DBX26ZQgDSM7DAqtvuLwJLesHQhDHDGkId3n6faluAMqJUy8su4DBUb5V5sY'
}

admin.messaging().send(message).then(res => {
    console.log('send success')
}).catch(err => {
    console.log(err)
})