import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="App">
      <div className="Signup">
        <h1>Instagram</h1>
        <input placeholder="Email" id="email" type="email" required />
        <input placeholder="Full Name" id="fullname" type="text" required />
        <input placeholder="Username" id="username" type="text" required />
        <input placeholder="Password" id="password" type="password" required />
        <button className="btn">Sign Up </button>
        <div className="loginpage">
          <span style={{ marginRight: "5px" }}> Have an account? </span>
          <Link to={"/"} className="link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
