import  * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA6xUJNab019KY3keHccZxSvovPN2G1Or4",
    authDomain: "convoy-2318e.firebaseapp.com",
    databaseURL: "https://convoy-2318e.firebaseio.com",
    projectId: "convoy-2318e",
    storageBucket: "",
    messagingSenderId: "1074582700670"
  };

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.database();
export const defaultAuth = firebase.auth();



