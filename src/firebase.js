import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase config....
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "talknet-8eec3.firebaseapp.com",
  projectId: "talknet-8eec3",
  storageBucket: "talknet-8eec3.appspot.com",
  messagingSenderId: "114513566160",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-MXC7FGDTGQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
