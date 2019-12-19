import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from './config.js';

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
    auth,
    firestore,
    signInWithGoogle
}

export default firebase;
