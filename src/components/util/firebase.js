// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPnSm4CfMst9Tzes4dAK-y8qVUAFOMOj0",
  authDomain: "netflix-75a7c.firebaseapp.com",
  projectId: "netflix-75a7c",
  storageBucket: "netflix-75a7c.firebasestorage.app",
  messagingSenderId: "629925878533",
  appId: "1:629925878533:web:0df7fe25251c4d7048756c",
  measurementId: "G-FD30VX3930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);