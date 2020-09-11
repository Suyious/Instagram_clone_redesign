import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyBRFwS_U9z7Qji-Z4b0BCfRGz3DNnPYbmw",
        authDomain: "instagram-clone-6d241.firebaseapp.com",
        databaseURL: "https://instagram-clone-6d241.firebaseio.com",
        projectId: "instagram-clone-6d241",
        storageBucket: "instagram-clone-6d241.appspot.com",
        messagingSenderId: "290799232251",
        appId: "1:290799232251:web:13bbe07c9f41366f0efc5e",
        measurementId: "G-1PTCTJT7DP"
})

const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage= firebase.storage();

export {db, auth, storage};