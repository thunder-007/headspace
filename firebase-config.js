// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0ihV0V6Zr-4RU09-s2RF4e7H1Y9KZ5EA",
    authDomain: "headspace-presidio.firebaseapp.com",
    projectId: "headspace-presidio",
    storageBucket: "headspace-presidio.appspot.com",
    messagingSenderId: "571790266174",
    appId: "1:571790266174:web:af10d5a46fa8405e77666f",
    measurementId: "G-DS02R9F1RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('User signed in:', user);
        // Store user information in local storage if needed
        localStorage.setItem('userName', user.displayName);
    } catch (error) {
        console.error('Error during sign in:', error);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        // Remove user data from localStorage
        localStorage.removeItem('userName');
        console.log('User signed out successfully');
    } catch (error) {
        console.error('Error during sign out:', error);
    }
};

