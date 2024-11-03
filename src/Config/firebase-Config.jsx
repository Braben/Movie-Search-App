// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSm3gNlW5XnThT6e31ezFuR4GoeDHWt1g",
  authDomain: "movie-app-853e8.firebaseapp.com",
  projectId: "movie-app-853e8",
  storageBucket: "movie-app-853e8.firebasestorage.app",
  messagingSenderId: "1018993125380",
  appId: "1:1018993125380:web:bce177696ddc8584352d51",
  measurementId: "G-DYBJ41D8XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);