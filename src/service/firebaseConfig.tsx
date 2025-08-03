// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trip-planner-eedfa.firebaseapp.com",
  projectId: "trip-planner-eedfa",
  storageBucket: "trip-planner-eedfa.firebasestorage.app",
  messagingSenderId: "1049419716274",
  appId: "1:1049419716274:web:6e9a2f9b5038fe0639dbab",
  measurementId: "G-JW3TVVX4LG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
// const analytics = getAnalytics(app);