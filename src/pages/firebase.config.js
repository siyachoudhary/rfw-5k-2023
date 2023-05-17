import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDdaGTaN2quvLdfLDkVW_eY8Oo2_KNwrxY",
    authDomain: "runforwater2023.firebaseapp.com",
    projectId: "runforwater2023",
    storageBucket: "runforwater2023.appspot.com",
    messagingSenderId: "86407176271",
    appId: "1:86407176271:web:5f05c5670993ed5c9e8a3a",
    measurementId: "G-JCDJQK5FMZ"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;
