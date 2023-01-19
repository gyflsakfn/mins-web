import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useProjects from '../../hooks/useProjects';
import openOrAlert from '../../util/openOrAlert';

const ProjectCard = ({ project: { id, title, desc, image, demoUrl, gitUrl } }) => {
  const { user } = useAuthContext();

  const { removeProject } = useProjects();

  const removeProjectHandler = () => {
    removeProject.mutate({ id }, {
      onSuccess: () => {
        window.alert('해당 프로젝트가 삭제되었습니다.')
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
        <button onClick={openOrAlert(demoUrl)} className="btn sm white" >Demo</button>
        <button onClick={openOrAlert(gitUrl)} className="btn sm primary">Gitbub</button>
        {
          user?.isAdmin && <button className='btn sm primary' onClick={removeProjectHandler}>삭제</button>
        }
      </div>
    </li>
  )
}

export default ProjectCard