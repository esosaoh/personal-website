import React from 'react';
import { ProfilePhoto } from './components/ProfilePhoto';
import { About } from './components/About';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';
import type { AppProps } from './types';
import './App.css';

export const App: React.FC<AppProps> = ({ profile }) => {
  return (
    <div className="container">
      {/* Header with photo */}
      <div className="header mb-8">
        <ProfilePhoto photoUrl={profile.photoUrl} name={profile.name} />
      </div>
      
      {/* About Section */}
      <div className="mb-8">
        <About bio={profile.bio} socialLinks={profile.socialLinks} />
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
};

export default App;