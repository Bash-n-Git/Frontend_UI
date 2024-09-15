import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => setOpen(!open);

    return (
        <>
            {/* Arrow button to toggle the sidebar */}
            <button
                className={`menu-toggle ${open ? 'open' : ''}`}
                onClick={toggleSidebar}
            >
                {open ? '<' : '>'}
            </button>
            {/* Sidebar container */}
            <div className={`sidebar ${open ? 'open' : ''}`}>
                <h2>Members</h2>
                <ul>
                    <li>Member 1</li>
                    <li>Member 2</li>
                    <li>Member 3</li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
