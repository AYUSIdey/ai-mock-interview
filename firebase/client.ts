import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRUq8eSRR0TQH8R0ODlsHm9awqm3Pi0N8",
    authDomain: "quickprep-b8e01.firebaseapp.com",
    projectId: "quickprep-b8e01",
    storageBucket: "quickprep-b8e01.firebasestorage.app",
    messagingSenderId: "1039859667655",
    appId: "1:1039859667655:web:0c78cbab2dcab719bce4e2",
    measurementId: "G-NN457XM5CX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);