// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7DGVtrZyCbljWwLre760hVPklPH3nqdw",
  authDomain: "ayrisbeautymachine.firebaseapp.com",
  projectId: "ayrisbeautymachine",
  storageBucket: "ayrisbeautymachine.appspot.com",
  messagingSenderId: "470381789299",
  appId: "1:470381789299:web:89e80ffc07acbe919fea06",
  measurementId: "G-336R69KCK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);