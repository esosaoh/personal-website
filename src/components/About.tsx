import React from 'react';
import type { AboutProps } from '../types';

export const About: React.FC<AboutProps> = ({ bio, socialLinks }) => (
  <section className="about-section">
    <div className="about-text">
      <p>{bio}</p>
      
      <div className="flex justify-center mt-4 gap-8">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all border border-gray-200 no-underline active:text-gray-700"
          >
            {link.name}{index < socialLinks.length - 1 ? " " : ""}
          </a>
        ))}
      </div>
    </div>
  </section>
);