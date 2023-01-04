import './portfolio.css'
import User from '../../component/User';
import { useAuthContext } from '../../context/AuthContext';
import { BsFillPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Button from '../../component/ui/Button';
import { getProjects } from '../../api/firebase';
import ProjectCard from './ProjectCard';
import { useQuery } from "@tanstack/react-query";

const Portfolio = () => {
  const { isLoading, error, data: projects } = useQuery(['projects'], getProjects)
  const { user, login, logout } = useAuthContext();

  const handleLogin = () => {
    login();
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      {isLoading && <p>Loading..</p>}
      {error && <p>{error}</p>}
      <ul className="portfolio__projects" >
        {projects &&
          projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </ul>

      {user && <User user={user} />}
      {!user && <Button text={'Login'} onClick={handleLogin} />}
      {user && <Button text={'Logout'} onClick={handleLogout} />}
      {user?.isAdmin && (
        <Link to={'/newPortfolio'}>
          <BsFillPencilFill />
        </Link>
      )}
    </section>
  )
}

export default Portfolio