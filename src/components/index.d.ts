import { FC, ReactNode } from 'react';

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

export interface AboutProps {
  children: ReactNode;
}

export const ProjectCard: FC<ProjectCardProps>;
export const ProfilePhoto: FC<ProfilePhotoProps>;
export const About: FC<AboutProps>;