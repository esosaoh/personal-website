import React from 'react';
import type { ProjectCardProps } from '../types';

const isVideo = (url: string) => {
  return url.toLowerCase().endsWith('.webm');
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, mediaUrl, githubUrl }) => {
  // Create a wrapper that's either a link or a div based on whether githubUrl exists
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (githubUrl) {
      return (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          {children}
        </a>
      );
    }
    return <div className="project-card">{children}</div>;
  };

  return (
    <Wrapper>
      <div className="media-container">
        {isVideo(mediaUrl) ? (
          <video 
            src={mediaUrl}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img 
            src={mediaUrl}
            alt={title}
          />
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </Wrapper>
  );
};