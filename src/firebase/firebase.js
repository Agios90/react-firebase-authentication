import * as firebase from 'firebase';

const devConfig = {
  apiKey: "AIzaSyCZ_91G9h5RRLbrnAs8P5etWyrDSXxp6Ak",
  authDomain: "react-firebase-auth-angelos.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-angelos.firebaseio.com",
  projectId: "react-firebase-auth-angelos",
  torageBucket: "react-firebase-auth-angelos.appspot.com",
  messagingSenderId: "820222735389"
};

if (!firebase.apps.length) {
  firebase.initializeApp(devConfig);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
