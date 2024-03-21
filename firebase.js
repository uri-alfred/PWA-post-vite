import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDz2Ejrc7Tn0CYT_EJ-BQKwmTGgVYp3Cew",
  authDomain: "pwa-push-31e97.firebaseapp.com",
  projectId: "pwa-push-31e97",
  storageBucket: "pwa-push-31e97.appspot.com",
  messagingSenderId: "818397956802",
  appId: "1:818397956802:web:e4b927ade34f062840495b",
  measurementId: "G-XR8WFV6KLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);