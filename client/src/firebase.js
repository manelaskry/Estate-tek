// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-875c0.firebaseapp.com",
  projectId: "mern-estate-875c0",
  storageBucket: "mern-estate-875c0.appspot.com",
  messagingSenderId: "108048801873",
  appId: "1:108048801873:web:2901a2ea637837afc2d870"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);