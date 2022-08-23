// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGRvdwN8DTQmaz2h0wwoc5-nUfh9yndPg",
  authDomain: "blog-application-clone.firebaseapp.com",
  projectId: "blog-application-clone",
  storageBucket: "blog-application-clone.appspot.com",
  messagingSenderId: "538535588848",
  appId: "1:538535588848:web:dfdcc0954283728b06a335",
  measurementId: "G-5RB3F0JL1H",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth();

export { auth };
