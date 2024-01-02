// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATyn2pxnDlM24TXUqHmndg6dVGL-4iL6k",
  authDomain: "shreeram-d4d4d.firebaseapp.com",
  projectId: "shreeram-d4d4d",
  storageBucket: "shreeram-d4d4d.appspot.com",
  messagingSenderId: "793372012790",
  appId: "1:793372012790:web:842f566c88e0b0a438fcd7",
  measurementId: "G-PGLRKEN86D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Use `getAuth` to get the authentication instance

export default app; // Export the Firebase app instance
