import * as firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA0pNeamfPofUqMiLdcucxPPjlo4no0L_M",
    authDomain: "q-app-d7df6.firebaseapp.com",
    databaseURL: "https://q-app-d7df6.firebaseio.com",
    projectId: "q-app-d7df6",
    storageBucket: "q-app-d7df6.appspot.com",
    messagingSenderId: "342219360403"
  };
  firebase.initializeApp(config);

  export default firebase;