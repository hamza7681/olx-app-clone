import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvSK4Gt8I8edrl3mtkDXjYXbIvryFp-C8",
  authDomain: "olx-clone-162c5.firebaseapp.com",
  projectId: "olx-clone-162c5",
  storageBucket: "olx-clone-162c5.appspot.com",
  messagingSenderId: "918669431196",
  appId: "1:918669431196:web:57642cb9651e4002bef859",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(app);

export { auth, db, storage };
