import firebase from 'firebase';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyC8Jnl2-Iokp_abToBacIn57al_arwJBF4",
    authDomain: "motobible.firebaseapp.com",
    databaseURL: "https://motobible.firebaseio.com",
    projectId: "motobible",
    storageBucket: "motobible.appspot.com",
    messagingSenderId: "764008121202",
    appId: "1:764008121202:web:f242e5f71357d624c953eb",
    measurementId: "G-28LRZ7FRR6"
});

export default fire;