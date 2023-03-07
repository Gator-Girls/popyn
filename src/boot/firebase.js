import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdMwTwN5wmPFtBCnRGtE0OYixf-jJLK9k",
  authDomain: "popyn-18d51.firebaseapp.com",
  projectId: "popyn-18d51",
  storageBucket: "popyn-18d51.appspot.com",
  messagingSenderId: "699103021609",
  appId: "1:699103021609:web:dbd96da9c777eaf541aa38",
  measurementId: "G-9LSB6DSJJ8",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

export default db;
