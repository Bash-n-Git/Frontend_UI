import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-box">
        <h2>Login to your Account</h2>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="forgot-password">Forgot Password?</p>
      </div>
      <div className="signup-prompt">
        <h3>New Here?</h3>
        <p>Enter your personal details to start your journey with us</p>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default LoginPage;
