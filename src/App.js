import { useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase/compat/app";

/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/
function App() {
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      db.collection("emails").add({
        email: data,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setData("");
    }
  };

  return (
    <div className="App">
      <from action="">
        <input
          type="email"
          onChange={(e) => setData(e.target.value)}
          value={data}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Subscribe
        </button>
      </from>
    </div>
  );
}

export default App;
