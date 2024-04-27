// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaLBf0bJgJWx7v7mxYAJE7un4xH5Lcb34",
  authDomain: "eco-craft.firebaseapp.com",
  projectId: "eco-craft",
  storageBucket: "eco-craft.appspot.com",
  messagingSenderId: "954292435962",
  appId: "1:954292435962:web:e35c72053903d5cfec0243",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
