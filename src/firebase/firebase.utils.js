import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkhm2bPIS7qwxH0iGsMIz3ayGjG1ywp7g",
  authDomain: "crwn-db-udemy-turtorial.firebaseapp.com",
  databaseURL: "https://crwn-db-udemy-turtorial.firebaseio.com",
  projectId: "crwn-db-udemy-turtorial",
  storageBucket: "crwn-db-udemy-turtorial.appspot.com",
  messagingSenderId: "355713452004",
  appId: "1:355713452004:web:c3fb8fd9f1f50c62eb69f1",
  measurementId: "G-X81HQCX51L",
};

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt : 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;