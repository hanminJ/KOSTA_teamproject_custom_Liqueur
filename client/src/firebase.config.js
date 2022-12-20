import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcJDbTU35ORLOr8V2-ebOVdr8YOBGB3Jw",
  authDomain: "login-670ba.firebaseapp.com",
  projectId: "login-670ba",
  storageBucket: "login-670ba.appspot.com",
  messagingSenderId: "769903301359",
  appId: "1:769903301359:web:88b5393e7eb79cda53411a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
