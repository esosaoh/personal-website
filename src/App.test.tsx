import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { personalInfo } from './data/projects';

test('renders profile name', () => {
  render(<App profile={personalInfo} />);
  const nameElement = screen.getByText(personalInfo.name);
  expect(nameElement).toBeInTheDocument();
});
