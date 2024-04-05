// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
/**
 * Ubahlah `xxxxx` dengan data konfigurasi proyek Firebase Anda
 */
const firebaseConfig = {
  apiKey: 'AIzaSyDd1ROKgBCuODG3HRaNk2nFLEL0vdORLek',
  authDomain: 'money-tracker-app-e9b1d.firebaseapp.com',
  projectId: 'money-tracker-app-e9b1d',
  storageBucket: 'money-tracker-app-e9b1d.appspot.com',
  messagingSenderId: '823754161882',
  appId: '1:823754161882:web:bcc980be4dd7243b3c6fe3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth, db, storage };
