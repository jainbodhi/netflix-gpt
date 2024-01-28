import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCs4QcAm0hZM0VZfzGsgpHrMz4mf-Ze5lQ",
//   authDomain: "netflix-gpt-f2c9e.firebaseapp.com",
//   projectId: "netflix-gpt-f2c9e",
//   storageBucket: "netflix-gpt-f2c9e.appspot.com",
//   messagingSenderId: "361202563844",
//   appId: "1:361202563844:web:c73a8f4ed63c86cf89ae51",
//   measurementId: "G-4X772T7CJD"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCx3HpCtHyQB4ZiQqv2U1WrgX1kIz8SqNE",
    authDomain: "movieandmeet.firebaseapp.com",
    projectId: "movieandmeet",
    storageBucket: "movieandmeet.appspot.com",
    messagingSenderId: "819960154050",
    appId: "1:819960154050:web:794b10578198f25b20b85b",
    measurementId: "G-RBZ82F4XK2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
