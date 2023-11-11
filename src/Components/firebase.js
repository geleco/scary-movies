import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVDDqmW9xfk9U6LJOwl5Y9mebCvnMABDI",
  authDomain: "scarymovies-c54a0.firebaseapp.com",
  projectId: "scarymovies-c54a0",
  storageBucket: "scarymovies-c54a0.appspot.com",
  messagingSenderId: "819096964738",
  appId: "1:819096964738:web:0fe89c187716e7da20ee9b",
  measurementId: "G-Z0QLQ93SGD"
};
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const {logger} = require("firebase-functions");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

export { auth, firestore, analytics, logger };
