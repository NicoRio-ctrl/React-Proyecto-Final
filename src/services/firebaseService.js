import { initializeApp } from "firebase/app"
import {
    browserLocalPersistence,
    getAuth,
    setPersistence,
  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO64RtcPz6FXUSy68gB8pTsoQ8cxrMcrc",
  authDomain: "react--proyecto--final.firebaseapp.com",
  projectId: "react--proyecto--final",
  storageBucket: "react--proyecto--final.appspot.com",
  messagingSenderId: "483775454382",
  appId: "1:483775454382:web:d622c2a5dd8f841282613f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to LocalStorage.");
  })
  .catch((err) => {
    console.error("Error setting auth persistence:", err);
  });