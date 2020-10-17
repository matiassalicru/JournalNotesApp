import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAfBcK3f9uZOeSzWbNxjvz6067PjZ0ePE",
  authDomain: "react-app-cursofh.firebaseapp.com",
  databaseURL: "https://react-app-cursofh.firebaseio.com",
  projectId: "react-app-cursofh",
  storageBucket: "react-app-cursofh.appspot.com",
  messagingSenderId: "935159215765",
  appId: "1:935159215765:web:a9fe903d58812658c74d9c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
     db,
     googleAuthProvider,
     firebase,
    };
