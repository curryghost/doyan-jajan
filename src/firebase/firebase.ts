import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyACIYI23MLHXEKfXCtYa9vnUO04qFNAl5I",
  authDomain: "doyan-jajan.firebaseapp.com",
  projectId: "doyan-jajan",
  storageBucket: "doyan-jajan.appspot.com",
  messagingSenderId: "862543631923",
  appId: "1:862543631923:web:c4c206105fb6521a14b546",
};

export const fbApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fbApp);
export const db = getFirestore(fbApp);
export const storage = getStorage(fbApp);
