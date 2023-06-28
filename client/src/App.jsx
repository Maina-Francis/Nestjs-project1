import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./Home";
import ProtectedRoute from "./components/ProtectedRoute";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const checkAuthentication = () => {
      // const token = localStorage.getItem("token");
      const token = document.cookie;
      // console.log(token);
      return !!token; // Convert token presence to boolean value
    };

    const is_Authenticated = checkAuthentication();

    setIsAuthenticated(is_Authenticated);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/home"
          exact
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
