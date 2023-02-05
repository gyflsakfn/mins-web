import './portfolio.css'
import { useAuthContext } from '../../context/AuthContext';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';

import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";

const Portfolio = () => {
  const { user } = useAuthContext();
  const { projectsQuery: { isLoading, error, data: projects },
  } = useProjects();

  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <p>최근 작업한 프로젝트 목록입니다. 꾸준한 업데이트로 개선해나가고 있습니다.</p>
      {
        user?.isAdmin && (
          <Link to={'/newPortfolio'}>
            <div className="newPortfolio__button">
              <BsPencilSquare />
            </div>
          </Link>
        )}

      {isLoading && <p>Loading..</p>}
      {error && <p>{error}</p>}
      <div className="container portfolio__container">
        <ul className="portfolio__projects">
          {projects &&
            projects?.map(project => <ProjectCard key={project.id} project={project} />)}
        </ul>
      </div>

    </section>
  )
}

export default memo(Portfolio)