import React from "react";
import "./LoginScreen.css";
import instagram from "./instagram.png";
import { Link } from "react-router-dom";

function LoginScreen({
  setSignInOpen,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  signIn,
}) {
  return (
    <div className="screen_page">
      <div className="screen_card">
        <form action="">
          <img className="logo_image" src={instagram} alt="" />
          <input
            className="input input_email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="input input_password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="button button_signin" onClick={signIn}>
            Sign In
          </button>
          <button
            className="button button_cancel"
            onClick={() => setSignInOpen(false)}
          >
            Cancel
          </button>
        </form>
        <p className="authtoggle">
          Don't have an account? <Link className="authtoggle_link" to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
