// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext(null);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setIsAuthenticated(true);
        setUser(firebaseUser);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
      setLoading(false); // Loading complete once we get the auth state
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const logout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout, loading }}>
      {!loading && children} {/* Only render children when not loading */}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
