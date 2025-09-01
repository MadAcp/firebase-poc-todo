// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRpshzx1pqKz2XnuMsXY9X9OqkRQeul4",
  authDomain: "react-todo-app-85b9d.firebaseapp.com",
  projectId: "react-todo-app-85b9d",
  storageBucket: "react-todo-app-85b9d.firebasestorage.app",
  messagingSenderId: "799262635226",
  appId: "1:799262635226:web:ae3437d631b8b673e061e3",
  measurementId: "G-HN2JRMHX20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
