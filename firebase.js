// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4M0G1EOgHJBUcbfeHK4hr9PYT1Wfd8Rw",
    authDomain: "gigo-90a9d.firebaseapp.com",
    projectId: "gigo-90a9d",
    storageBucket: "gigo-90a9d.firebasestorage.app",
    messagingSenderId: "639896512262",
    appId: "1:639896512262:web:1367e79d437d58e2b7a087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

