// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZljmjE5GqZO9LFS99eiupfeWww9WCNP8",
  authDomain: "visa-portal-website.firebaseapp.com",
  projectId: "visa-portal-website",
  storageBucket: "visa-portal-website.firebasestorage.app",
  messagingSenderId: "922446782077",
  appId: "1:922446782077:web:e25c1205250009f4be5b14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);