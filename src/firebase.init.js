// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD3So8-uU43qLXPAyI38HbbnEIbJxDlTY",
  authDomain: "assignment-09-f413c.firebaseapp.com",
  projectId: "assignment-09-f413c",
  storageBucket: "assignment-09-f413c.firebasestorage.app",
  messagingSenderId: "299676309614",
  appId: "1:299676309614:web:17d19c00a762cf574e2e7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);