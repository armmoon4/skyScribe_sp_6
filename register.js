import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhH5Pc46TEAlzCSPIxI7jQaVeyddn4978",
  authDomain: "skyscribe-d711d.firebaseapp.com",
  projectId: "skyscribe-d711d",
  storageBucket: "skyscribe-d711d.firebasestorage.app",
  messagingSenderId: "722867758409",
  appId: "1:722867758409:web:7ceab586537b7c1a256698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup functionality
document.getElementById("submit-signup").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

// Login functionality
document.getElementById("submit-login").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //alert("Login successful!");
      window.location.href = "dashboard.html"; // Replace with the target page URL
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

