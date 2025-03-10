import React from 'react';

function ProjectCard({ src, link, h3, p, h1 }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img className='hover' src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{h1}</p>
    </a>
  );
}

export default ProjectCard;
