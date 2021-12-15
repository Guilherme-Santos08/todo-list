// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBeM6aR9mRXH0U8qN-A1juy9j5X25Hqz7g",
  authDomain: "todo-list-f10b9.firebaseapp.com",
  projectId: "todo-list-f10b9",
  storageBucket: "todo-list-f10b9.appspot.com",
  messagingSenderId: "228534352519",
  appId: "1:228534352519:web:9b16b8c207ef67f0b95622",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getDatabase(app);

