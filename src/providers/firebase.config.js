import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCqOjZhQIKGdyppfLWxZHI2rBNevMKj8Wk",
  authDomain: "privet-router-autentication.firebaseapp.com",
  projectId: "privet-router-autentication",
  storageBucket: "privet-router-autentication.appspot.com",
  messagingSenderId: "670312311948",
  appId: "1:670312311948:web:8213718b321a26d1255fa9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
