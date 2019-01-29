import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAGuCBjo7F7IiM0PZoFeO0egAfeN7Kb3wE",
    authDomain: "m-city-bc454.firebaseapp.com",
    databaseURL: "https://m-city-bc454.firebaseio.com",
    projectId: "m-city-bc454",
    storageBucket: "m-city-bc454.appspot.com",
    messagingSenderId: "966852374097"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
export {
    firebase,
    firebaseMatches,
    firebasePromotions
}