import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtuG5iXYD4c4D2YkftYNMnvuCZglOW_Yo",
    authDomain: "cold-bruh.firebaseapp.com",
    projectId: "cold-bruh",
    storageBucket: "cold-bruh.appspot.com",
    messagingSenderId: "96192387145",
    appId: "1:96192387145:web:d9f9909a4079c624d14798",
    measurementId: "G-B03B34XGNR"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  export default db;