import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN9egxlt2cJltF6ot8l5tu14Zo462OuW8",
    authDomain: "yourit-department-c0c42.firebaseapp.com",
    projectId: "yourit-department-c0c42",
    storageBucket: "yourit-department-c0c42.appspot.com",
    messagingSenderId: "455285785933",
    appId: "1:455285785933:web:1def25d143f279a4006304"
};


export const fireBaseApp = initializeApp(firebaseConfig);
export const fireStore = getFirestore(fireBaseApp)



