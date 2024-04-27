/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  //   Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout User
  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
      }
    });
  }, []);

  const authInfo = { user, setUser, createUser, loginUser, logoutUser };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
