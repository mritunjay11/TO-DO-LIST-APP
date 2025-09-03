// Import Firebase CDN modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

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
const auth = getAuth(app);

// DOM Elements
const submit = document.querySelector('#submit-btn');
const form = document.querySelector('.form');
const mainapp = document.querySelector('.container');

// Signup
submit.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('#mail').value;
  const password = document.querySelector('#Password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      debugger
      form.classList.toggle('invisible')
      alert("User created successfully!");
      mainapp.classList.toggle('visible')
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login
const login = document.querySelector('#login-btn');

login.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('#mail').value;
  const password = document.querySelector('#Password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      form.style.display = "none";
      alert("You are logged in!");
      mainapp.style.display = "block";
    })
    .catch((error) => {
      alert(error.message);
    });
});
