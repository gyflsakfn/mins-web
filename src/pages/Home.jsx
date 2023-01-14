
import { useOutletContext } from "react-router-dom";
import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import Comments from '../section/comments/Comments';
import FloatingNav from '../section/floating-nav/FloatingNav';
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";

const Home = () => {
  console.log('홈 렌더링');

  const { showFloatingNav } = useOutletContext();
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Comments />
      {showFloatingNav && <FloatingNav />}
    </>
  )
}

export default Home