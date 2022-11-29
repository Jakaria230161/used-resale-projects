// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgswb2d5qj75hXd2Kugc0d5P4nwMjL66o",
    authDomain: "mobile-seller-buyer.firebaseapp.com",
    projectId: "mobile-seller-buyer",
    storageBucket: "mobile-seller-buyer.appspot.com",
    messagingSenderId: "158769478061",
    appId: "1:158769478061:web:9ea16ee1e504266e708924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;