import './portfolio.css'
import ProjectsCategories from './ProjectsCategories';
import Projects from './Projects';

const Portfolio = () => {


  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories />
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio