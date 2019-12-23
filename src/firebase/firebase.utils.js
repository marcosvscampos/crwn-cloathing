import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from './config.js';

const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnapshot = await userRef.get();

    if(!userSnapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
} 

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
    createUserProfileDocument,
    auth,
    firestore,
    signInWithGoogle
}

export default firebase;
