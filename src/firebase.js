import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

//Your web app Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBEBsHQrAYjZa_hPGc9Ead-OV0PB3ye22M",
    authDomain: "docs-ad56a.firebaseapp.com",
    databaseURL: "https://docs-ad56a.firebaseio.com",
    projectId: "docs-ad56a",
    storageBucket: "docs-ad56a.appspot.com",
    messagingSenderId: "958604944885",
    appId: "1:958604944885:web:97f9c499b849572f3dacbc",
    measurementId: "G-2SF5MLXNLD"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

