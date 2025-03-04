import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDOV3wUQz5Dfuy3Fs39tf2ritmIG4_mR_Y",
  authDomain: "react-7a695.firebaseapp.com",
  projectId: "react-7a695",
  storageBucket: "react-7a695.firebasestorage.app",
  messagingSenderId: "156280299806",
  appId: "1:156280299806:web:e795350c9a123968e1690f",
  measurementId: "G-7VXSCR4T2F",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
     await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating users", error.message);
    }
    
  }

  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
