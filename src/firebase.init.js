// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId, */

  apiKey: "AIzaSyBvN2lijzynlSDKIwX-N1Y7YxsHnCsKlmY",
  authDomain: "genius-car-services-bdea5.firebaseapp.com",
  projectId: "genius-car-services-bdea5",
  storageBucket: "genius-car-services-bdea5.appspot.com",
  messagingSenderId: "565811268538",
  appId: "1:565811268538:web:dcfb37d71e8cf5a2552b83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
