// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp7RuC0tCMBcdC8g7F1hYtl3V4NY9Yw1c",
  authDomain: "portifolio-33487.firebaseapp.com",
  projectId: "portifolio-33487",
  storageBucket: "portifolio-33487.appspot.com",
  messagingSenderId: "14847067883",
  appId: "1:14847067883:web:9ba3e051a51d48c99e20ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;