import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign Up</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="first name">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
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
              className="form-control rounded-1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-1"
            />
          </div>

          <button className="btn btn-success w-100 rounded-1">Sign Up</button>

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
