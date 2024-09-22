import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // Your Firebase configuration object goes here
    // You can find this in your Firebase project settings
    apiKey: "AIzaSyBj98-fVANplzhC5I4YezFQ-8hvIAaU888",
    authDomain: "cardmanager-6f931.firebaseapp.com",
    projectId: "cardmanager-6f931",
    storageBucket: "cardmanager-6f931.appspot.com",
    messagingSenderId: "1052222222222",
    appId: "1:1052222222222:web:1234567890abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
