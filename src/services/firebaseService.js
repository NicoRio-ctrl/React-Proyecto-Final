// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"// TODO: Add SDKs for Firebase products that you want to use
import {
    browserLocalPersistence,
    getAuth,
    setPersistence,
  } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO64RtcPz6FXUSy68gB8pTsoQ8cxrMcrc",
  authDomain: "react--proyecto--final.firebaseapp.com",
  projectId: "react--proyecto--final",
  storageBucket: "react--proyecto--final.appspot.com",
  messagingSenderId: "483775454382",
  appId: "1:483775454382:web:d622c2a5dd8f841282613f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);