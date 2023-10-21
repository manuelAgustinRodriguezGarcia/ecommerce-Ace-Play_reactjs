import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZoZ7Ah0KSNraO2lb6VZtZhDeUDvTIVJA",
  authDomain: "ecommerce-rodriguezgarcia.firebaseapp.com",
  projectId: "ecommerce-rodriguezgarcia",
  storageBucket: "ecommerce-rodriguezgarcia.appspot.com",
  messagingSenderId: "935284390465",
  appId: "1:935284390465:web:0f89c7290bcf0251eee4c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
