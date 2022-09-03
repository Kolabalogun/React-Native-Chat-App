import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCt9EFRSHo4y4mvKw0lc3vKocmMcyrF7m4",
  authDomain: "chat-app-708f6.firebaseapp.com",
  projectId: "chat-app-708f6",
  storageBucket: "chat-app-708f6.appspot.com",
  messagingSenderId: "107719977939",
  appId: "1:107719977939:web:146fa4bdae068e1ecd5d26",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
