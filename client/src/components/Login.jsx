import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>

          <button className="btn btn-success">Login</button>

          <p>You agree to our terms and conditions</p>
          <button className="btn btn-default border">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
