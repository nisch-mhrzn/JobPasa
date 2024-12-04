// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHyf9Tncl_JBb4HshKhtO977zwlO2atGY",
  authDomain: "online-job-portal-1ff52.firebaseapp.com",
  projectId: "online-job-portal-1ff52",
  storageBucket: "online-job-portal-1ff52.firebasestorage.app",
  messagingSenderId: "145883198389",
  appId: "1:145883198389:web:55d2ca3f73e525e3341ffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};