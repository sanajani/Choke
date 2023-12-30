// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.FIREBASE_AUTHDOMAIN,
  projectId: import.meta.FIREBASE_PROJECTID,
  storageBucket: import.meta.FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.FIREBASE_MESSAGEINGSENDERID,
  appId: import.meta.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);