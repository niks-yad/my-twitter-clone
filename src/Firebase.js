import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZXwio9T-U4T8LcckMVFq9Uu_MvNnb4Ss",
    authDomain: "twitter-clone-8b672.firebaseapp.com",
    projectId: "twitter-clone-8b672",
    storageBucket: "twitter-clone-8b672.appspot.com",
    messagingSenderId: "312035654945",
    appId: "1:312035654945:web:cfe59609aa4446a5c85260"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;