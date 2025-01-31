// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvf7S80Ckl5NDylT6GelQFcjbuIMp3Nc",
  authDomain: "library-manegment-system.firebaseapp.com",
  projectId: "library-manegment-system",
  storageBucket: "library-manegment-system.firebasestorage.app",
  messagingSenderId: "10500600241",
  appId: "1:10500600241:web:f67e3320b1338a10cbcd90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)