// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAynB2XLS9svoN7PFGCzUNz9wAQko75Fpk",
  authDomain: "todolist-b69be.firebaseapp.com",
  projectId: "todolist-b69be",
  storageBucket: "todolist-b69be.firebasestorage.app",
  messagingSenderId: "392041905306",
  appId: "1:392041905306:web:d79c75c653eb3a6b83b323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app,firebaseConfig)