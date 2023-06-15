import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/login" replace />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
