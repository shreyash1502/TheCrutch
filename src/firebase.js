import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkRrOYobRY9e5sUolzKSvJ08-5O3wUyYo",
    authDomain: "thecrutch-82557.firebaseapp.com",
    projectId: "thecrutch-82557",
    storageBucket: "thecrutch-82557.appspot.com",
    messagingSenderId: "28550238708",
    appId: "1:28550238708:web:8e059c613fc362202969a1"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};