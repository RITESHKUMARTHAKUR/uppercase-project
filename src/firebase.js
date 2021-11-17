import firebase from "firebase/app";

import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPu_jg8QgpK5xXfNv35zWoYBqC7CjyyNY",
  authDomain: "uppercase-project-c2aff.firebaseapp.com",
  databaseURL: "https://uppercase-project-c2aff-default-rtdb.firebaseio.com",
  projectId: "uppercase-project-c2aff",
  storageBucket: "uppercase-project-c2aff.appspot.com",
  messagingSenderId: "727226651779",
  appId: "1:727226651779:web:6fa61c937ad47f756cf7b6",
});
console.log(firebase);
export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();

export default firebaseApp;
