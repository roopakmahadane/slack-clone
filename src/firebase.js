import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzYY-kdDJXp8rACy3H0VfSOfbC50IIJH0",
  authDomain: "slack-clone-3186c.firebaseapp.com",
  databaseURL: "https://slack-clone-3186c.firebaseio.com",
  projectId: "slack-clone-3186c",
  storageBucket: "slack-clone-3186c.appspot.com",
  messagingSenderId: "440663111027",
  appId: "1:440663111027:web:a1f3485c779ab8d16cc106",
  measurementId: "G-MTBX9EJY3K",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
