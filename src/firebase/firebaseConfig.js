import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6BMx08GK_ThVVgqgG4xSyHA7BNPwW4_k",
  authDomain: "edu-react-native-app.firebaseapp.com",
  projectId: "edu-react-native-app",
  storageBucket: "edu-react-native-app.appspot.com",
  messagingSenderId: "823840840749",
  appId: "1:823840840749:web:ad68afad951c6b81302ca4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
