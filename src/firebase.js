import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDRC2rZctDKfM4einR30BM1oStVQ58P3c",
  authDomain: "wutube-56ddc.firebaseapp.com",
  projectId: "wutube-56ddc",
  storageBucket: "wutube-56ddc.appspot.com",
  messagingSenderId: "410704037087",
  appId: "1:410704037087:web:a87a28d1a6685f52a6156a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
