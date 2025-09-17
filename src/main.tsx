import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./Components/SignIn";
import CreateAccount from "./Components/CreateAccount";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Login page route */}
        <Route path="/signin" element={<SignIn />} />

        {/* redirect  to signup */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);