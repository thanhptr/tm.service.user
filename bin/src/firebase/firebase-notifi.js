"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
class FireBaseNotifi {
}
FireBaseNotifi.sendForTopPic = (topic, title, message, fcm, screenID) => {
    var payload = {
        notification: {
            title: title,
            body: message,
        },
        data: {
            screenID: screenID,
        }
    };
    return firebase_1.firebaseAdmin.messaging().send(topic, payload).then((response) => {
        // console.log(response);
    }).catch((error) => {
        console.log(error);
    });
};
FireBaseNotifi.sendForScreen = (title, message, fcm, screenID) => {
    var payload = {
        notification: {
            title: title,
            body: message,
        },
        data: {
            screenID: screenID,
        },
        token: fcm
    };
    firebase_1.firebaseAdmin.messaging().send(payload).then((response) => {
        // console.log(response);
    }).catch((error) => {
        console.log(error);
    });
};
FireBaseNotifi.sendForMessage = (title, message, fcm, userId, screenID) => {
    var payload = {
        notification: {
            title: title,
            body: message,
        },
        data: {
            title: "Tin nhắn: " + title,
            message: message,
            screenID: screenID,
            userId: userId,
        },
        token: fcm
    };
    return firebase_1.firebaseAdmin.messaging().send(payload).then((response) => {
        // console.log(response);
    }).catch((error) => {
        console.log("Error: " + error);
    });
};
exports.default = FireBaseNotifi;
