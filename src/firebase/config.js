import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4OppwSz93OIQ2ALTWs493ir0IyOYJY-A",
  authDomain: "finance-tracker-8bf32.firebaseapp.com",
  projectId: "finance-tracker-8bf32",
  storageBucket: "finance-tracker-8bf32.firebasestorage.app",
  messagingSenderId: "217152590793",
  appId: "1:217152590793:web:bdfbcb7470e889da760e18"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
