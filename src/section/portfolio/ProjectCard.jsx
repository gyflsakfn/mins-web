import React from 'react'
import { removeProjects } from '../../api/firebase'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const ProjectCard = ({ project: { id, title, category, image, demoUrl, gitUrl } }) => {

  const queryClient = useQueryClient();
  const removeProject = useMutation(({ id }) => removeProjects(id),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    });

  const removeProjectHandler = () => {
    removeProject.mutate({ id }, {
      onSuccess: () => {
        console.log('삭제됨.')
      }
    })
  }

  return (
    <li className='portfolio__project'>
      <div className="portfolio__project-image">
        <img src={image} alt="Portfolio Project Img" />
      </div>
      <button className='btn' onClick={removeProjectHandler}>삭제</button>
      <h4>{title}</h4>
      <p>{category}</p>
      <div className="portfolio__project-cta">
        <a href={demoUrl} className="btn sm white" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={gitUrl} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
      </div>
    </li>
  )
}

export default ProjectCard