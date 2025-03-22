"use client"; // ✅ This is fine if you're using Next.js, otherwise remove it

import { createContext, useState, useContext, useEffect } from "react";

// Create User Context
const UserContext = createContext();

// Create Provider Component
export const UserProvider = ({ children }) => {
  // ✅ Load initial state from localStorage (if available)
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData
      ? JSON.parse(savedUserData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          dateOfBirth: "",
          phoneNumber: "",
          location: "",
          language: "",
          profileImage: null,
        };
  });

  // ✅ Update localStorage whenever userData changes
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  // ✅ Function to update user data
  const updateUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Custom Hook to Use Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
