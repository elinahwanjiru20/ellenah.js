// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj52EL5Qi11DnSv66CCRpYlo8-JsnaVrg",
  authDomain: "login-app-e2172.firebaseapp.com",
  projectId: "login-app-e2172",
  storageBucket: "login-app-e2172.appspot.com",
  messagingSenderId: "817776615840",
  appId: "1:817776615840:web:0f5ead48954156150284c5",
  measurementId: "G-9ZBXVS6SD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig