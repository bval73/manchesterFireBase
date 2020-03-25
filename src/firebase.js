import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

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
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

// firebaseDB.ref('matches').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// })

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers
}