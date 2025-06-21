import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDanVsz_37YLXl79KqTfhypsO3Y2N26a3k",
  authDomain: "mp-sambyal.firebaseapp.com",
  projectId: "mp-sambyal",
  storageBucket: "mp-sambyal.appspot.com",
  messagingSenderId: "745116254657",
  appId: "1:745116254657:web:d8973064aba87475e9af40"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 