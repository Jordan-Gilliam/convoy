import  * as firebase from 'firebase';

const config = {
    apiKey: "env.apikey",
    authDomain: "convoy-2318e.firebaseapp.com",
    databaseURL: "env.db",
    projectId: "convoy-2318e",
    storageBucket: "",
    messagingSenderId: "1074582700670"
  };

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.database();
export const defaultAuth = firebase.auth();



