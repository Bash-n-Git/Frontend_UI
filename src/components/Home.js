import React, { useState } from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import ProjectList from './ProjectList';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    

    return (
        <div className="home-container">
            
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`projects-container ${isSidebarOpen ? 'shifted' : ''}`}>
                <h2>Your Projects</h2>
                <ProjectList />
            </div>
        </div>
    );
}

export default Home;
