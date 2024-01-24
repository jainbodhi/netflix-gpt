import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCs4QcAm0hZM0VZfzGsgpHrMz4mf-Ze5lQ",
  authDomain: "netflix-gpt-f2c9e.firebaseapp.com",
  projectId: "netflix-gpt-f2c9e",
  storageBucket: "netflix-gpt-f2c9e.appspot.com",
  messagingSenderId: "361202563844",
  appId: "1:361202563844:web:c73a8f4ed63c86cf89ae51",
  measurementId: "G-4X772T7CJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);