import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDNups99_BxJFt3EtBjUPfl7Z-DTE5O4H8",
    authDomain: "abbasejlali-b056d.firebaseapp.com",
    projectId: "abbasejlali-b056d",
    storageBucket: "abbasejlali-b056d.appspot.com",
    messagingSenderId: "481809569484",
    appId: "1:481809569484:web:8aa47501ec8ebc56b45469",
  })
  .auth();
