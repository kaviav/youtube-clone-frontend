import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDRC2rZctDKfM4einR30BM1oStVQ58P3c",
  authDomain: "video-7801c.firebaseapp.com",
  projectId: "video-7801c",
  storageBucket: "video-7801c.appspot.com",
  messagingSenderId: "130073115219",
  appId: "1:130073115219:web:365035e1474abbe7fba4a6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
