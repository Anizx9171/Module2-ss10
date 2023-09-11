import React from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <NavBar />
      <Link to="/" className="back-home">
        {" "}
        {"<"} backhome
      </Link>
      <form className="login-form">
        <h2>Sign in</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  );
};
