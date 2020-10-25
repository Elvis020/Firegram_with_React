import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyCTvmJw44jxclPwksSobDtd2xa0PaaVsNo",
    authDomain: "firegram-46107.firebaseapp.com",
    databaseURL: "https://firegram-46107.firebaseio.com",
    projectId: "firegram-46107",
    storageBucket: "firegram-46107.appspot.com",
    messagingSenderId: "864686380187",
    appId: "1:864686380187:web:97c4a284216005d48ba23e",
    measurementId: "G-MBQP97KF09"
};


// Initializing Firebase
firebase.initializeApp(firebaseConfig);



// Setting up storage service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


// Creating a firebase timestamp to monitor the timestamp at which the file is uploaded.
//NB: This is something created by firebase
const timeStamp = firebase.firestore.FieldValue.serverTimestamp


export {
    projectStorage,
    projectFirestore,
    timeStamp
}