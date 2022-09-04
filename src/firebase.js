// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfLFtT1FMvBoXA8ly01Y3L6dxE1ndZQ8U',
  authDomain: 'auth-app-156e6.firebaseapp.com',
  projectId: 'auth-app-156e6',
  storageBucket: 'auth-app-156e6.appspot.com',
  messagingSenderId: '1058611991196',
  appId: '1:1058611991196:web:2412732426836c0d041359',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
