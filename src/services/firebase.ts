import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAleCrUv4HbS-Lhg1HeIP7moa-hrNtr2M",
  authDomain: "mct-nfs.firebaseapp.com",
  projectId: "mct-nfs",
  storageBucket: "mct-nfs.appspot.com",
  messagingSenderId: "367083544072",
  appId: "1:367083544072:web:4ee33126c8942ce23a7bbd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };