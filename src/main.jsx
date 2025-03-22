import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext"; // ✅ Import UserProvider
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* i added the useProvider here so that we can be able to use the  usercontext.jsx file*/}
    <UserProvider>
      {" "}
      {/* ✅ Wrap App in UserProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
