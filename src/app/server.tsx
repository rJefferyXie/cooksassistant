import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmuMrQ5rvY_lFBza2fuKXpi__v61ppat0",
  authDomain: "acooksassistant.firebaseapp.com",
  projectId: "acooksassistant",
  storageBucket: "acooksassistant.appspot.com",
  messagingSenderId: "623105820227",
  appId: "1:623105820227:web:cad1ad68396c760a9476f6",
  measurementId: "G-P9D87KGBNR"
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const db = getFirestore(app);

export {
  db, 
  analytics
};