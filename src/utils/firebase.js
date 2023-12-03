import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxi5wJ5F2b3h59AY0ZGAUcMNXGcOcLk64",
  authDomain: "test-13313.firebaseapp.com",
  projectId: "test-13313",
  storageBucket: "test-13313.appspot.com",
  messagingSenderId: "510211852394",
  appId: "1:510211852394:web:6dec7698918def789e6213",
  measurementId: "G-WZN0XMXW5M"
};

// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db


