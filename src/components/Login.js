import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Login() {
  return (
    <div className="App">
      <div className="Signup">
        <h1>Instagram</h1>
        <input placeholder="Enter username or email" type="text" required />
        <input placeholder="Password" type="password" required />
        <button className="btn">Log In</button>
        <div className="loginpage">
          <span style={{ marginRight: "5px" }}> New to Instagram? </span>
          <Link to={"/signup"} className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
