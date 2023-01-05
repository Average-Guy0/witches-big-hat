import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF1Jsni5uggKsLaSt9sqq95rGiBZHNb3U",
  authDomain: "witch-s-big-hat.firebaseapp.com",
  projectId: "witch-s-big-hat",
  storageBucket: "witch-s-big-hat.appspot.com",
  messagingSenderId: "459035506576",
  appId: "1:459035506576:web:083edcbf01c30879e36515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
