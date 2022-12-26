import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC5AMNF2uNXgwj9DCcBGDtMj9BiRweklEU",
    authDomain: "martimall.firebaseapp.com",
    projectId: "martimall",
    storageBucket: "martimall.appspot.com",
    messagingSenderId: "16282518360",
    appId: "1:16282518360:web:d084b4f2058e6ef8509b2d",
    measurementId: "G-LP6S8885HT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app