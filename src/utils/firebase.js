// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQVdkQt04LFBh5icqEy-fUnWkY2-eYOU",
  authDomain: "fire-base-contact-app-d92d7.firebaseapp.com",
  databaseURL: "https://fire-base-contact-app-d92d7-default-rtdb.firebaseio.com",
  projectId: "fire-base-contact-app-d92d7",
  storageBucket: "fire-base-contact-app-d92d7.appspot.com",
  messagingSenderId: "725248490526",
  appId: "1:725248490526:web:638d39958473e784f5c20f",
  measurementId: "G-YD5G11LWS2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;