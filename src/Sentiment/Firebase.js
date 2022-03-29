import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDuvle4wvgUDOe-8_k0S3nclHjK6SLxKCw",
  authDomain: "stockify-5caa1.firebaseapp.com",
  projectId: "stockify-5caa1",
  storageBucket: "stockify-5caa1.appspot.com",
  messagingSenderId: "977964468292",
  appId: "1:977964468292:web:8e0e376e54b4858f091411",
  measurementId: "G-06TSRJH8GD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

