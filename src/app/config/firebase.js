import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChXNbqgwmM8bYnAsGWsXT6mQt4S8ByAmo",
  authDomain: "revents-82d0a.firebaseapp.com",
  projectId: "revents-82d0a",
  storageBucket: "revents-82d0a.appspot.com",
  messagingSenderId: "164117998164",
  appId: "1:164117998164:web:eb0a2f66fa034e07f3dbc1",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
