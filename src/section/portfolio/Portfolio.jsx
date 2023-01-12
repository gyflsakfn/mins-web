import './portfolio.css'
import { useAuthContext } from '../../context/AuthContext';
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { getProjects } from '../../api/firebase';
import { BsFillPencilFill } from 'react-icons/bs'
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const { isLoading, error, data: projects } = useQuery(['projects'], getProjects)
  const { user } = useAuthContext();

  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <p>최근 작업한 프로젝트 목록입니다. 꾸준한 업데이트로 개선해나가고 있습니다.</p>
      {
        user?.isAdmin && (
          <Link to={'/newPortfolio'}>
            <div className="newPortfolio__button">
              <BsFillPencilFill />
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

export default Portfolio