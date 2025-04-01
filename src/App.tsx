import React from 'react';
import { ProjectCard } from './components/ProjectCard';
import { ProfilePhoto } from './components/ProfilePhoto';
import { About } from './components/About';
import { projects, personalInfo } from './data/projects';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header with photo */}
      <div className="header mb-8">
        <ProfilePhoto 
          photoUrl={personalInfo.photoUrl} 
          name={personalInfo.name} 
        />
      </div>
      
      {/* About Section */}
      <div className="mb-8">
        <About />
      </div>
      
      {/* Projects Section */}
      <div className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              mediaUrl={project.mediaUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;