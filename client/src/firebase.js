import  * as firebase from 'firebase';

const config = {
    apiKey: "env.apikey",
    authDomain: "env.authDomain",
    databaseURL: "env.db",
    projectId: "env.projectId",
    storageBucket: "",
    messagingSenderId: "env.messagingSenderId"
  };

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.database();
export const defaultAuth = firebase.auth();



