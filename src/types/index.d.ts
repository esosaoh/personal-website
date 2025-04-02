import React from 'react';

export interface ProjectCardProps {
  title: string;
  description: string;
  mediaUrl: string;
  githubUrl?: string;
}

export interface ProfilePhotoProps {
  photoUrl: string;
  name: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface AboutProps {
  bio: string;
  socialLinks: SocialLink[];
}

export interface Profile {
  name: string;
  photoUrl: string;
  bio: string;
  socialLinks: SocialLink[];
}

export interface AppProps {
  profile: Profile;
}

export const ProjectCard: React.FC<ProjectCardProps>;
export const ProfilePhoto: React.FC<ProfilePhotoProps>;
export const About: React.FC<AboutProps>; 