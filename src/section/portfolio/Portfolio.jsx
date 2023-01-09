import './portfolio.css'
import { useAuthContext } from '../../context/AuthContext';
import { BsFillPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { getProjects } from '../../api/firebase';
import ProjectCard from './ProjectCard';
import { useQuery } from "@tanstack/react-query";

const Portfolio = () => {
  const { isLoading, error, data: projects } = useQuery(['projects'], getProjects)
  const { user } = useAuthContext();

  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      {user?.isAdmin && (
        <Link to={'/newPortfolio'}>
          <div className="newPortfolio__button">
            <BsFillPencilFill />
          </div>
        </Link>
      )}

      {isLoading && <p>Loading..</p>}
      {error && <p>{error}</p>}
      <div className="container portfolio__container">
        <ul className="portfolio__projects" >
          {projects &&
            projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </ul>
      </div>

    </section>
  )
}

export default Portfolio