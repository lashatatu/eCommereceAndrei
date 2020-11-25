import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUjlmpufhAb1EVfYNxqKQJauS_Y1Epk1E",
    authDomain: "ecommerceandrei.firebaseapp.com",
    databaseURL: "https://ecommerceandrei.firebaseio.com",
    projectId: "ecommerceandrei",
    storageBucket: "ecommerceandrei.appspot.com",
    messagingSenderId: "17796654777",
    appId: "1:17796654777:web:87d89d88948d69ca3ddd68",
    measurementId: "G-Y2D8Z7Q6KP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

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
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;