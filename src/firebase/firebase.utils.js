import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
  apiKey: "AIzaSyD82ITwLQW5x7mnb64i1d4Qbe7qDQKxCvA",
  authDomain: "crwn-clothing-b30db.firebaseapp.com",
  projectId: "crwn-clothing-b30db",
  storageBucket: "crwn-clothing-b30db.appspot.com",
  messagingSenderId: "38267780258",
  appId: "1:38267780258:web:82d22bd857ee013578abfb"
}

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 


