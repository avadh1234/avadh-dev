import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCymPLQpRAPqVvmN_JRakqFwEBIXIaWC9g",
    authDomain: "avadh-dev.firebaseapp.com",
    projectId: "avadh-dev",
    storageBucket: "avadh-dev.appspot.com",
    messagingSenderId: "193747917841",
    appId: "1:193747917841:web:c39b6b096d8e178b00e5b0",
    measurementId: "G-9MC3781EY4"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;