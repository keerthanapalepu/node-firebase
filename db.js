import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: process.ENV.APIKEY,
    authDomain: process.ENV.AUTHDOMAIN,
    databaseURL: process.ENV.DATABASEURL,
    projectId: process.ENV.PROJECTID,
    storageBucket: process.ENV.STORAGEBUCKET,
    messagingSenderId: process.ENV.MESSAGINGSENDERID,
    appId: process.ENV.APPID,
    measurementId: process.ENV.MEASUREMENTID
};

export default firebase.initializeApp(firebaseConfig).firestore();