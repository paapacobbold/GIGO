import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

// Move useAuth hook definition before AuthProvider
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log("Login successful"); // Debug log
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  console.log("Auth state:", { isAuthenticated });

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export both as named exports
export { AuthProvider, useAuth };
