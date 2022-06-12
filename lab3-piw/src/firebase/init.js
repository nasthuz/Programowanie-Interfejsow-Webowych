// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmLEE1KAiULgsts75cs0fJiuJCsHRcoYs",
  authDomain: "jkkj-6b4f2.firebaseapp.com",
  projectId: "jkkj-6b4f2",
  storageBucket: "jkkj-6b4f2.appspot.com",
  messagingSenderId: "13548654640",
  appId: "1:13548654640:web:e383512d3feff7ab245df5",
  measurementId: "G-EN2PM0FFCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);