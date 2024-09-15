import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <div className="signup-page-container">
      <div className="signup-box">
        <h2>Create your Account</h2>
        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="input-group">
            <label>Hobbies</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>College</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Year</label>
            <input type="text" />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="login-prompt">
        <h3>Welcome Back!</h3>
        <p>To keep connected with us please login with your personal info.</p>
        <Link to="/login"><button>Sign In</button></Link>
      </div>
    </div>
  );
}

export default SignUpPage;
