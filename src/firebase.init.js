// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIhZrLjlhQ5BKpmmrV14f8K2tv_ypjK9s",
  authDomain: "denturo-clinic.firebaseapp.com",
  projectId: "denturo-clinic",
  storageBucket: "denturo-clinic.appspot.com",
  messagingSenderId: "918865442037",
  appId: "1:918865442037:web:eaf41b93e4937b627c01bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;