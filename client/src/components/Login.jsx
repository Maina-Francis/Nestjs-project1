import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

const Login = ({ setIsAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("access_token");
      return !!token; // Convert token presence to boolean value
    };

    const isAuthenticated = checkAuthentication();
    setIsAuthenticated(isAuthenticated);

    if (isAuthenticated) {
      navigate("/home");
    }
  }, [setIsAuthenticated, navigate]);

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        values
      );
      const accessToken = response.data.token;
      localStorage.setItem("access_token", accessToken);

      setIsAuthenticated(true);

      // Hit the auth-service endpoint
      const authServiceResponse = await axios.post(
        "http://localhost:5000/auth/login",
        {
          token: accessToken,
          sourceSystem: "EBM",
        }
      );

      const refreshToken = authServiceResponse.data.refresh_token;
      localStorage.setItem("refresh_token", refreshToken);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 ">
        <h2 className="text-primary">Ebm Suite Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInput}
              className="form-control rounded-1"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-1"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-1">
            Login
          </button>

          <p>You agree to our terms and conditions</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
