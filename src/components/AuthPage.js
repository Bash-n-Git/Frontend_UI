import React, { useState } from 'react';
import './AuthPage.css';
import { Link } from 'react-router-dom';

function AuthPage() {
    const [Signups,SetSignups] = useState(false)
    
    
  return (
    <div className="auth-container">
<div className={`container ${Signups?("right-panel-active"):null}`} id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				
			</div>
			
			<div className='grid1'><input className="output" type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="text" placeholder="Phone Number" />
			<input type="text" placeholder="Hobbies" />
			<input type="text" placeholder="College" />
			<input type="text" placeholder="Year" /></div>
			<button className='ghost1'>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
			</div>
			
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<Link to="/otp-verification">Verify via OTP</Link>
			<button className='ghost1'>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us, please login with your personal info</p>
				<button class="ghost" id="signIn" onClick={()=>SetSignups(false)}>Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp" onClick={()=>SetSignups(true)}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


    </div>
  );
}

export default AuthPage;
