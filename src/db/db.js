
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUs8XKkvlDCj1sJHF5Qk4Hm-WaAoW3uWs",
  authDomain: "sarasosa1.firebaseapp.com",
  projectId: "sarasosa1",
  storageBucket: "sarasosa1.firebasestorage.app",
  messagingSenderId: "75157292331",
  appId: "1:75157292331:web:cf0980ef284016e240b16e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db; 