import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use Link for routing
import './Navbar.css';

function Navbar() {
    const [signedIn, setSignedIn] = React.useState(false);
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSignIn = () => {
        // Simulate sign-in process; you can replace this with actual authentication logic
        setSignedIn(true);
        navigate('/login'); // Navigate to login page
    };

    return (
        <header>
            <nav>
                <div className="nav-left">
                    <div className="logo">Logo</div>
                    <Link to="/projects">Projects</Link>
                    <Link to="/edits">Edits</Link>
                    <Link to="/chats">Chats</Link>
                </div>
                <div className="nav-right">
                    <input type="text" placeholder="Search..." />
                    {signedIn ? (
                        <img src="profile-icon.png" alt="Profile Icon" className="profile-icon" />
                    ) : (
                        <button onClick={handleSignIn}>Sign In</button>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
