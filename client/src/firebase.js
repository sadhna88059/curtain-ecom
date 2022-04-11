import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMb3_bdv9EPfCVTvfbXAwLAk46XDg-dKk",
  authDomain: "sadhna-8fcf7.firebaseapp.com",
  projectId: "sadhna-8fcf7",
  storageBucket: "sadhna-8fcf7.appspot.com",
  messagingSenderId: "353564093523",
  appId: "1:353564093523:web:160f16c83df5a14d4f6aa6",
  measurementId: "G-NMQMDB0NXD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
