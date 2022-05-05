import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


    
/*const firebaseConfig = {
    apikey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectid: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};*/

const firebaseConfig = {
    apiKey: "AIzaSyCj52EL5Qi11DnSv66CCRpYlo8-JsnaVrg",

    authDomain: "login-app-e2172.firebaseapp.com",
  
    projectId: "login-app-e2172",
  
    storageBucket: "login-app-e2172.appspot.com",
  
    messagingSenderId: "817776615840",
  
    appId: "1:817776615840:web:0f5ead48954156150284c5",
  
    measurementId: "G-9ZBXVS6SD3"
  
}

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app;
    
