import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import Comments from '../section/comments/Comments';
import FAQs from "../section/faqs/FAQs";
import IsFloatingNav from "../section/floating-nav/IsFloatingNav";
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Comments />
      <FAQs />
      <IsFloatingNav />
    </>
  )
}

export default Home