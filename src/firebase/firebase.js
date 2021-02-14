import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyD1F9uONzHOW8EM8pybTXjqMaySfopYiZw",
  authDomain: "avgguido.firebaseapp.com",
  databaseURL: "https://avgguido.firebaseio.com",
  projectId: "avgguido",
  storageBucket: "avgguido.appspot.com",
  messagingSenderId: "934425988426",
  appId: "1:934425988426:web:3d608cdaab5ca55f6305b3",
  measurementId: "G-HVHL9HL6MT",
};

// initialization
firebase.initializeApp(config);
firebase.analytics();

// log in providers
export const google_provider = new firebase.auth.GoogleAuthProvider();

// export
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
