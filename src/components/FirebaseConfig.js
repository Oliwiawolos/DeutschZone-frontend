import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPHv1jvi5cShLyX0Joje6cqP5m8mslpQg",
  authDomain: "projektowanie-bcad4.firebaseapp.com",
  projectId: "projektowanie-bcad4",
  storageBucket: "projektowanie-bcad4.appspot.com",
  messagingSenderId: "522553626224",
  appId: "1:522553626224:web:5be5925f8831a1c5226eb5",
  measurementId: "G-XPPT8SBZ9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);