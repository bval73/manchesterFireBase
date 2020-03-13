import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDg4h7YTKXXFSGzbo3kkgp87NkbplVjeVo",
  authDomain: "manchester-26202.firebaseapp.com",
  databaseURL: "https://manchester-26202.firebaseio.com",
  projectId: "manchester-26202",
  storageBucket: "manchester-26202.appspot.com",
  messagingSenderId: "5165378409",
  appId: "1:5165378409:web:eb88ab3eec6d9461b72bf8"
};
// Initialize Firebase
firebase.initializeApp(config);

const firebaseDB = firebase.database();

// firebaseDB.ref('matches').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// })