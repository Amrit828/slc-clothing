import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCjIEpAkpr70WEmcJZjWtbeqwiPTzHhpJ8",
  authDomain: "slc-db.firebaseapp.com",
  databaseURL: "https://slc-db.firebaseio.com",
  projectId: "slc-db",
  storageBucket: "slc-db.appspot.com",
  messagingSenderId: "340115488514",
  appId: "1:340115488514:web:c736d89ab81915a2b50c1b",
  measurementId: "G-1EMDPPH4DZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
