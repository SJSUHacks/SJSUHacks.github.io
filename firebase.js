// Firebase Firestore setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLDAyQ-jEmfjOX2mLhnuY9t-esJ3_ny9Q",
    authDomain: "siliconxhackthon.firebaseapp.com",
    projectId: "siliconxhackthon",
    storageBucket: "siliconxhackthon.appspot.com",
    messagingSenderId: "371076178744",
    appId: "1:371076178744:web:b526b07077c4dba48f97cd",
    measurementId: "G-8W824TVJPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore functions and db instance
export { db, addDoc, collection };
