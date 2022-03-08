import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import 'firebase/auth';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const  config = {
  apiKey: "AIzaSyBPtHnyvEf_YirnWX3SlKwnsgfD6viXl80",
  authDomain: "marioplan95.firebaseapp.com",
  projectId: "marioplan95",
  storageBucket: "marioplan95.appspot.com",
  messagingSenderId: "930806490581",
  appId: "1:930806490581:web:e06fb79758402d4ca6895c"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true}); 

export default firebase;
