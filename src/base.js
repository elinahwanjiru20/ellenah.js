import * as firebase from "firebase/app";
// import "firebase/auth";
require('firebase/auth')

    
const app = firebase.initializeApp({
    apikey: process.env.React_APP_FIREBASE_KEY,
    authDomain:process.env.React_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.React_APP_FIREBASE_DATABASE,
    projectid:process.env.React_APP_FIREBASE_PROJECT_ID,
    StorageBucket:process.env.React_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.React_APP_FIREBASE_SENDER_ID


});
export default app;       

