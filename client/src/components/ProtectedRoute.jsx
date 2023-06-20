import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../Home";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    // console.log(isAuthenticated);
    // console.log(children);
    // return children;
    return <Home />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
