
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9aUwDrmwd5RuM-ApH7Up0Pn-L7IbQ_cA",
  authDomain: "fi-management-webapp.firebaseapp.com",
  projectId: "fi-management-webapp",
  storageBucket: "fi-management-webapp.appspot.com",
  messagingSenderId: "831352639707",
  appId: "1:831352639707:web:2ff8ea119929c986c37cfe",
  measurementId: "G-J5Q56PFS2P"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)