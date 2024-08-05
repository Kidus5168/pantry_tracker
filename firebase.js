// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARqQ-a5nWZup3S87rXaNBsWvXnpxPihek",
  authDomain: "inventory-managment-bd48f.firebaseapp.com",
  projectId: "inventory-managment-bd48f",
  storageBucket: "inventory-managment-bd48f.appspot.com",
  messagingSenderId: "946398365158",
  appId: "1:946398365158:web:838654d65cdd3c6f940227",
  measurementId: "G-B1B518XK1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore};