// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, isCompleted, onClick }) {
    return (
        <div className={`project-card ${isCompleted ? 'completed' : 'working'}`} onClick={onClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="status">
                <input type="checkbox" checked={isCompleted} readOnly />
                <label>{isCompleted ? 'Completed' : 'Working'}</label>
            </div>
        </div>
    );
}

export default ProjectCard;
