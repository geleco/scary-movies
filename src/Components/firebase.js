import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjfrTnIuxlu0FmI_dGjRZ30KrsuJgFTgo",
  authDomain: "scary-movies-2023-868b8.firebaseapp.com",
  projectId: "scary-movies-2023-868b8",
  storageBucket: "scary-movies-2023-868b8.appspot.com",
  messagingSenderId: "687171111254",
  appId: "1:687171111254:web:04b6eb7fcedb4274106ef7",
  measurementId: "G-L82CD9Q0SR"
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, firestore, analytics };
