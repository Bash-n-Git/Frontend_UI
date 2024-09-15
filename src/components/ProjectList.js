// ProjectList.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectList() {
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project 1', description: 'Description for Project 1', isCompleted: true },
        { id: 2, title: 'Project 2', description: 'Description for Project 2', isCompleted: false },
        { id: 3, title: 'Project 3', description: 'Description for Project 3', isCompleted: false },
        // Add more projects here
    ]);

    const handleCardClick = (id) => {
        // Logic to open the project (e.g., redirect to a detailed page)
        console.log(`Project ${id} clicked`);
    };

    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    isCompleted={project.isCompleted}
                    onClick={() => handleCardClick(project.id)}
                />
            ))}
        </div>
    );
}

export default ProjectList;
