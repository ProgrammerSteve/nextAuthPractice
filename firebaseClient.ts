// firebaseClient.ts

import firebaseClient from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDnOxfPtmbSDcoLEEEq8NNJZY60NJbQ4ug",
  authDomain: "profilepage-85fa8.firebaseapp.com",
  projectId: "profilepage-85fa8",
  storageBucket: "profilepage-85fa8.appspot.com",
  messagingSenderId: "654373847215",
  appId: "1:654373847215:web:49ca2ac8918a32856f145a"
};




if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };