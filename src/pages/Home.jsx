import React from 'react'
import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import Comments from '../section/comments/Comments';
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";
import Theme from '../theme/Theme';


const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Comments />
      <Theme />
    </>
  )
}

export default Home