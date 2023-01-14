import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useProjects from '../../hooks/useProjects';

const ProjectCard = ({ project: { id, title, desc, image, demoUrl, gitUrl } }) => {
  const { user } = useAuthContext();

  const { removeProject } = useProjects();

  const removeProjectHandler = () => {
    removeProject.mutate({ id }, {
      onSuccess: () => {
        // TODO: 내용 채워야 함.
        console.log('삭제됨.')
      }
    })
  }

  return (
    <li className='portfolio__project'>
      <div className="portfolio__project-image">
        <img src={image} alt="Portfolio Project Img" />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="portfolio__project-cta">
        <a href={demoUrl} className="btn sm white" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={gitUrl} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
        {
          user?.isAdmin && <button className='btn sm primary' onClick={removeProjectHandler}>삭제</button>
        }
      </div>
    </li>
  )
}

export default ProjectCard