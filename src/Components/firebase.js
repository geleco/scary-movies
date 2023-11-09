// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyC4cdUypn_cHxPtFBTXYpUNMHtcpQwYgTs",
  authDomain: "scarymovies-18270.firebaseapp.com",
  projectId: "scarymovies-18270",
  storageBucket: "scarymovies-18270.appspot.com",
  messagingSenderId: "925900984547",
  appId: "1:925900984547:web:a293bec2726a7705f675d6",
  measurementId: "G-RLFPL2L4NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth, firestore };
