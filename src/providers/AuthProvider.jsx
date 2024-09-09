import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { app } from "./firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authReloader, setAuthReloader] = useState(true);
  const axiosInstance = useAxios();
  const auth = getAuth(app);

  useEffect(() => {
    const un = onAuthStateChanged(auth, async (cUser) => {
      if (cUser) {
        const { data } = await axiosInstance.post(
          "/create-jwt-token",
          {
            email: cUser.email,
          },
          { withCredentials: true }
        );
        if (data.success) {
          setUser(cUser);
          setLoading(false);
        }
      } else {
        await axiosInstance.post(
          "/remove-jwt-token",
          { email: "" },
          { withCredentials: true }
        );
        setUser(null);
        setLoading(false);
      }
    });
    return () => un();
  }, [authReloader, axiosInstance, auth]);
  //! Login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //! Logout
  const logOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };
  //! Update Password
  const changePassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        authReloader,
        setAuthReloader,
        logIn,
        logOut,
        changePassword,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
