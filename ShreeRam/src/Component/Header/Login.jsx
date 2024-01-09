// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "/src/Firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user)
      setShowPopup(true);
      setTimeout(() => {
        navigate("/");
        console.log("running")
      }, 1500); // Adjust the delay as needed
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Your other login form elements can go here */}
        
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign in with Google
        </button>

        {/* Popup */}
        {showPopup && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-lg font-semibold">Sign-in successful!</p>
              <p>You will be redirected shortly...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
