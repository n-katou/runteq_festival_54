import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAq20iHlZEaZb4vQhTYLBRoxnoKDZuVpfc",
  authDomain: "runteqfestival54.firebaseapp.com",
  projectId: "runteqfestival54",
  storageBucket: "runteqfestival54.appspot.com",
  messagingSenderId: "423357412027",
  appId: "1:423357412027:web:434daf5cf55678cd866f9e",
  measurementId: "G-7CQ8W3DJ65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
