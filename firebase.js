// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo6ifSqA3m7PydzT9xdJtDgxKSNO-KFPo",
  authDomain: "solagram-7d0b9.firebaseapp.com",
  projectId: "solagram-7d0b9",
  storageBucket: "solagram-7d0b9.appspot.com",
  messagingSenderId: "65160983005",
  appId: "1:65160983005:web:1f6434d75583ea0ed04634"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export {auth}