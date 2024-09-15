import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import AuthPage from './components/AuthPage';
import Home from './components/Home'; 


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    {/* <Route path="/login" element={<AuthPage />} />  */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
