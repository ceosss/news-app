import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCpzxA4h82fLbjKiTYxkzcRulcLioucnXs",
  authDomain: "minute-news.firebaseapp.com",
  databaseURL: "https://minute-news.firebaseio.com",
  projectId: "minute-news",
  storageBucket: "minute-news.appspot.com",
  messagingSenderId: "638831581398",
  appId: "1:638831581398:web:2dfed9b492a12ab3645177",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
