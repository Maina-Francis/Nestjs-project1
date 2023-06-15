import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");
      return !!token; // Convert token presence to boolean value
    };
    const is_Authenticated = checkAuthentication();
    if (!is_Authenticated) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    console.log(is_Authenticated);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path={isAuthenticated ? "/home" : ""} exact element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
