// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFED0bYehIstSgevj6or6no7BG99JK4_k",
  authDomain: "babyhelp-c9c67.firebaseapp.com",
  projectId: "babyhelp-c9c67",
  storageBucket: "babyhelp-c9c67.appspot.com",
  messagingSenderId: "265601266334",
  appId: "1:265601266334:web:a38460ca9a5ee6d3ce418f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const baseDato = getFirestore();
const facebook = new FacebookAuthProvider();

export {
  app,
  google, 
  baseDato,
  facebook
}