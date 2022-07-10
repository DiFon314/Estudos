// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe1gA0LqT2vslanfk7o41yxgIxxo_VoIo",
  authDomain: "teste2-3a82b.firebaseapp.com",
  projectId: "teste2-3a82b",
  storageBucket: "teste2-3a82b.appspot.com",
  messagingSenderId: "631197053586",
  appId: "1:631197053586:web:fbcc063049f160720d6c4b",
  measurementId: "G-KX7G0TS9LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const { Board, Relay, Led } = require("johnny-five");
const board = new Board();


board.on("ready", () => {
  const rele = new Relay(8);
  const led =new Led(13);
  board.repl.inject({
    rele,
    led,
  });

});

