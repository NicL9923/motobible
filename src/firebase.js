import firebase from 'firebase';
require("firebase/firestore");

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

//const db = firebase.firestore();

/*Write data
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});*/

/*Read data
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});*/

export default fire;