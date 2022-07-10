// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics , logEvent } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAsMpyMXKwisJ4bQ9URXPCognXQDG_9oQk",
  authDomain: "teste1-34e42.firebaseapp.com",
  databaseURL: "https://teste1-34e42-default-rtdb.firebaseio.com",
  projectId: "teste1-34e42",
  storageBucket: "teste1-34e42.appspot.com",
  messagingSenderId: "998914105787",
  appId: "1:998914105787:web:3ecc03709645f6d0b2649e",
  measurementId: "G-TNNKCKKMBH"
});

// Initialize Firebase
const app = initializeApp(firebaseApp);
const analytics = getAnalytics(app);

logEvent(analytics, 'notification_received');
