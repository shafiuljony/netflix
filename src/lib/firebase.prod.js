import Firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// seed the database

// config here

const config = {
  apiKey: 'AIzaSyBPMQgb9dSOMaGUYMfTkEf1BEsLJPMbaQY',
  authDomain: 'netflix-90c93.firebaseapp.com',
  projectId: 'netflix-90c93',
  storageBucket: 'netflix-90c93.appspot.com',
  messagingSenderId: '219723230890',
  appId: '1:219723230890:web:aeb83d76bfa6edcb99ead3',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
