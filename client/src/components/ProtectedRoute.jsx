// import React from "react";
// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    // console.log(isAuthenticated);
    // console.log(children);
    return children;
  } else {
    // return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
