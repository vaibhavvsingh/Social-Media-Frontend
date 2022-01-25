import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import User from "./components/User";
import UserContext from "./Context";
import React from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    isLoggedIn: false,
  });

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path="/"
            element={
              !user.isLoggedIn ? <Navigate replace to="/login" /> : <User />
            }
          />
          <Route
            path="/login"
            element={user.isLoggedIn ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user.isLoggedIn ? <Navigate replace to="/" /> : <Signup />}
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
