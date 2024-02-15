// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk2OnsVhz9ymbcn9S4F0MVjv0BsuZTEaE",
  authDomain: "nike-web-57f7f.firebaseapp.com",
  projectId: "nike-web-57f7f",
  storageBucket: "nike-web-57f7f.appspot.com",
  messagingSenderId: "100885060785",
  appId: "1:100885060785:web:65b5a2580bf2e8981b1690"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;