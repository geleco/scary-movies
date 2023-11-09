import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4cdUypn_cHxPtFBTXYpUNMHtcpQwYgTs",
  authDomain: "scarymovies-18270.firebaseapp.com",
  projectId: "scarymovies-18270",
  storageBucket: "scarymovies-18270.appspot.com",
  messagingSenderId: "925900984547",
  appId: "1:925900984547:web:a293bec2726a7705f675d6",
  measurementId: "G-RLFPL2L4NS"
};
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, firestore, analytics };
