import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAe1gA0LqT2vslanfk7o41yxgIxxo_VoIo",
    authDomain: "teste2-3a82b.firebaseapp.com",
    projectId: "teste2-3a82b",
    storageBucket: "teste2-3a82b.appspot.com",
    messagingSenderId: "631197053586",
    appId: "1:631197053586:web:fbcc063049f160720d6c4b",
    measurementId: "G-KX7G0TS9LJ"
  };

const initializeFirebaseApp = () => {
  if (!firebase.apps.length) {
    return firebase.initializeApp(config);
  }

  return firebase.app();
};

const firebaseApp = initializeFirebaseApp();

export { firebaseApp };
