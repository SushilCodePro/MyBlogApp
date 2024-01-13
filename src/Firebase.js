import { initializeApp } from 'firebase/app'; // Import the core Firebase module
import 'firebase/firestore'; // Import Firestore if you're using Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZNSoaxwR-1tv7HZaNqECCOQkM0iIPkjc",
  authDomain: "blogpost-b8f3f.firebaseapp.com",
  projectId: "blogpost-b8f3f",
  storageBucket: "blogpost-b8f3f.appspot.com",
  messagingSenderId: "300673165693",
  appId: "1:300673165693:web:bea55df048e15663d70414"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export {app};