// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgBxBP7fJBnGS4swqFhUgigUYgZaE8y6E",
  authDomain: "fir-practice-cb727.firebaseapp.com",
  projectId: "fir-practice-cb727",
  storageBucket: "fir-practice-cb727.firebasestorage.app",
  messagingSenderId: "19249710823",
  appId: "1:19249710823:web:f759513621c5cb05f48442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();