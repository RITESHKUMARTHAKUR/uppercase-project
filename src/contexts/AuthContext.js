import React, { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase";
import firebase from "../firebase";

const AuthContext = createContext();
export default AuthContext ;

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth } ;

function AuthProvider({ childern }) {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    await auth.createUserWithEmailAndPassword(email, password);

    console.log("user created !! ");
  };

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  };

  function logout() {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && childern}
    </AuthContext.Provider>
  );
}

export { AuthProvider } ;