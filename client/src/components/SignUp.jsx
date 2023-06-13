import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

const SignUp = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first name">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={handleInput}
              className="form-control rounded-1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="last name">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={handleInput}
              className="form-control rounded-1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="user name">
              <strong>User Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter User Name"
              name="userName"
              onChange={handleInput}
              className="form-control rounded-1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Password"
              name="email"
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

          <button className="btn btn-success w-100 rounded-1" type="submit">
            Sign Up
          </button>

          <p>You agree to our terms and conditions</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;