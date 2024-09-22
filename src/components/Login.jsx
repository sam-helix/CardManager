import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // You'll need to create this file
import { signOut } from "firebase/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, err] = useSignInWithGoogle(auth);
  const handleSignIn = () => {
    signInWithGoogle();
  };

  const handleSignOut = () => {
    signOut(auth).catch((err) => {
      console.error("error signing out:", err);
    });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (err) {
    return <div>Error: {err.message}</div>;
  }
  // if (user) {
  //   return <div></div>;
  // }
  return (
    <div className="flex items-center justify-end space-x-2 absolute top-5 right-20">
      {user ? (
        <div className="flex items-center justify-end space-x-4 ">
          <span className="text-sm font-medium">
            Signed in as: {user.user.displayName}
          </span>
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleSignIn}
          className="absolute top-5 right-20 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
