// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import authentication

const firebaseConfig = {
  apiKey: "AIzaSyC5tNeJAYckhV1G63E-WTvRhl9IPNp1lsw",
  authDomain: "movie-app-3b993.firebaseapp.com",
  projectId: "movie-app-3b993",
  storageBucket: "movie-app-3b993.firebasestorage.app",
  messagingSenderId: "140592080890",
  appId: "1:140592080890:web:78df0ef20e038e07b7e643",
  measurementId: "G-86N86FQ8B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication

export { auth }; // Export auth for use in your app
export default app; // Export app if needed
