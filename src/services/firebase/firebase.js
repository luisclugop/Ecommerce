import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCOPVRmaJiFRMjpVqMS_fV_pGRZh427_A",
    authDomain: "ecommerce-6fc55.firebaseapp.com",
    projectId: "ecommerce-6fc55",
    storageBucket: "ecommerce-6fc55.appspot.com",
    messagingSenderId: "339012075743",
    appId: "1:339012075743:web:fc89767dd2430009d8296a"
  };

const app = firebase.initializeApp(firebaseConfig);

export const database = getFirestore(app)