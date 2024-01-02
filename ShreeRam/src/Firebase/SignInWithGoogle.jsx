// SignInWithGoogle.jsx
import React from "react";
import { auth } from "./firebase";

const SignInWithGoogle = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      console.log("User signed in with Google successfully!");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return <button onClick={handleSignInWithGoogle}>Sign In with Google</button>;
};

export default SignInWithGoogle;
