import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDvYrDrEy6FaXqu2Uht1Xjv7pLwMyqOvCo",
  authDomain: "auth-ae462.firebaseapp.com",
  databaseURL: "https://auth-ae462-default-rtdb.firebaseio.com",
  projectId: "auth-ae462",
  storageBucket: "auth-ae462.appspot.com",
  messagingSenderId: "568538694083",
  appId: "1:568538694083:web:50f66e7ec157cd4f21bd76",
  measurementId: "G-60CRVZYF4L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
