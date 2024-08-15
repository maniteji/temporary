// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyjtCty-uC9DvsJEL-RudZJtCWhW85xUA",
  authDomain: "calgaryhelp-a72a9.firebaseapp.com",
  projectId: "calgaryhelp-a72a9",
  storageBucket: "calgaryhelp-a72a9.appspot.com",
  messagingSenderId: "511931284814",
  appId: "1:511931284814:web:92929e008ead28106f721f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);

export { fireDB, auth, storage };
