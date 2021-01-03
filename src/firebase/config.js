import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBinjYIk2a_Fv4zaB4SjysU3EG8q3qWYs4",
    authDomain: "live-chat-dc319.firebaseapp.com",
    projectId: "live-chat-dc319",
    storageBucket: "live-chat-dc319.appspot.com",
    messagingSenderId: "873154169046",
    appId: "1:873154169046:web:f2224e05d2f8279e3fa177"
  };

//Initialize App

firebase.initializeApp(firebaseConfig)

const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
export { timestamp , projectFirestore , projectAuth }