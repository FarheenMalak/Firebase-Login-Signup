import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWz4nh_rW3ukQ4EcYgd3iXYs-B0wRm878",
    authDomain: "login-signup-practice-648d9.firebaseapp.com",
    projectId: "login-signup-practice-648d9",
    storageBucket: "login-signup-practice-648d9.firebasestorage.app",
    messagingSenderId: "481443732344",
    appId: "1:481443732344:web:722f43df367c3d9b10468d",
    measurementId: "G-RLYTCMFV9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Uncomment if Google Analytics is required

function signUp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    if (!firstName || !lastName || !email || !password || !repeatPassword) {
        Swal.fire("Error", "Please fill out all fields", "error");
        return;
    }
    if (password !== repeatPassword) {
        Swal.fire("Error", "Passwords do not match", "error");
        return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            Swal.fire("Success", "User signed up successfully!", "success").then(() => {
            window.location.href = 'login.html';
        });
        })
        .catch((error) => {
            Swal.fire("Error", error.message, "error");
        });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        Swal.fire("Error", "Please fill out all fields", "error");
        return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            Swal.fire("Success", "User signed in successfully!", "success").then(() => {
                window.location.href = 'success.html';
            });
        })
        .catch((error) => {
            Swal.fire("Error", error.message, "error");
        });
}

// Ensure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("signUpForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        signUp();
    });

    document.getElementById("loginForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        login();
    });
});
