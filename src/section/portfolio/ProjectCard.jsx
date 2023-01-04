import React from 'react'

const ProjectCard = ({ project: { id, title, category, image, demoUrl, gitUrl } }) => {
  return (
    <li className='portfolio__project'>
      <div className="portfolio__project-image">
        <img src={image} alt="Portfolio Project Image" />
      </div>
      <h4>{title}</h4>
      <p>{category}</p>
      <div className="portfolio__project-cta">
        <a href={demoUrl} className="btn sm" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={gitUrl} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
      </div>
    </li>
  )
}

export default ProjectCard