// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; // Store images
import 'firebase/compat/firestore'; // Database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDEVOcs2FTe7rTP0YYSwQYfaQY3Bd4mUY',
  authDomain: 'adel-firegram.firebaseapp.com',
  projectId: 'adel-firegram',
  storageBucket: 'adel-firegram.appspot.com',
  messagingSenderId: '760522455533',
  appId: '1:760522455533:web:b36682da00a70e44b58fe4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialise Storage
export const projectStorage = firebase.storage();

// initialise Firestore
export const projectFirestore = firebase.firestore();

// Create timestamp
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
