import { lazy } from "react";
import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import FAQs from "../section/faqs/FAQs";
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";

const Comments = lazy(() => import("../section/comments/Comments"));
const IsFloatingNav = lazy(() => import("../section/floating-nav/IsFloatingNav"));


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