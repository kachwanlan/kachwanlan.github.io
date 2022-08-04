import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgezayvPQ_LhXDhb8FpEEFQEJxxpasAJo",
  authDomain: "onlineshop-357020.firebaseapp.com",
  projectId: "onlineshop-357020",
  storageBucket: "onlineshop-357020.appspot.com",
  messagingSenderId: "989169628366",
  appId: "1:989169628366:web:c4f9caadaa1af6736ecc9f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
