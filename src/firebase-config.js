import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuF5knPJvBy4iO4sybDAZ3_Jv_ZuuQ85o",
  authDomain: "blog-906e5.firebaseapp.com",
  projectId: "blog-906e5",
  storageBucket: "blog-906e5.appspot.com",
  messagingSenderId: "649721226766",
  appId: "1:649721226766:web:1cd07bc18d4ed4d95f7e5f",
  measurementId: "G-9F77Y4XQ1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
