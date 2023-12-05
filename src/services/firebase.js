import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxi5wJ5F2b3h59AY0ZGAUcMNXGcOcLk64",
  authDomain: "test-13313.firebaseapp.com",
  projectId: "test-13313",
  storageBucket: "test-13313.appspot.com",
  messagingSenderId: "510211852394",
  appId: "1:510211852394:web:6dec7698918def789e6213",
  measurementId: "G-WZN0XMXW5M"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
// const analytics = getAnalytics(app);



