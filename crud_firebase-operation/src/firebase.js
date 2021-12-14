import firebase from 'firebase/app';
import "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyAkyrT3TaGEaSrevsBV5qFuG2vqavLUmDg",
    authDomain: "crud-operation-1b29f.firebaseapp.com",
    projectId: "crud-operation-1b29f",
    storageBucket: "crud-operation-1b29f.appspot.com",
    messagingSenderId: "616339611551",
    appId: "1:616339611551:web:ace810c0a5e45ac8e767aa",
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
