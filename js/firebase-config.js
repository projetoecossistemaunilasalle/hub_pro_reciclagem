import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyDNsPSTzte8xGqqTvJsYZIcVW2cf6hvtVA",

    authDomain: "hub-pro-reciclagem-48af6.firebaseapp.com",

    projectId: "hub-pro-reciclagem-48af6",

    storageBucket: "hub-pro-reciclagem-48af6.firebasestorage.app",

    messagingSenderId: "121240597837",

    appId: "1:121240597837:web:d37e1e3f4a3b2cb9a7b304"

};


const app = initializeApp(firebaseConfig);


// Firebase Authentication
export const auth = getAuth(app);


// Cloud Firestore
export const db = getFirestore(app);