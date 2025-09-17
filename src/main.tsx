import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import SignIn from "./Components/SignIn";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        {/* Signup flow stays inside App */}

        <Route path="/signup" element={<App />} />

        {/* Login page route */}

        <Route path="/signin" element={<SignIn />} />

        {/* Optional: redirect / to signup */}

        <Route path="/" element={<App />} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

);