import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRMO8z2sZx4DjbPTWEX4FWizzF_VBmyg4",
  authDomain: "cotd-mdd.firebaseapp.com",
  databaseURL: "https://cotd-mdd.firebaseio.com",
  projectId: "cotd-mdd",
  storageBucket: "cotd-mdd.appspot.com",
  messagingSenderId: "543825845308",
  appId: "1:543825845308:web:a94c08571b78fc1b1eb739"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
