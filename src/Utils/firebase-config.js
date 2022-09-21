import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBiqamgb3Z1fZEgDlqncqaO2sL2QH7Yb1A",
  authDomain: "react-netlix-clone.firebaseapp.com",
  projectId: "react-netlix-clone",
  storageBucket: "react-netlix-clone.appspot.com",
  messagingSenderId: "750258708529",
  appId: "1:750258708529:web:0d413b15c24f266de67510",
  measurementId: "G-602ZX46481",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
