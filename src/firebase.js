import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "enter your info",
  authDomain: "enter your info",
  databaseURL: "enter your info",
  projectId: "enter your info",
  storageBucket: "enter your info",
  messagingSenderId: "enter your info",
  appId: "enter your info"
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
